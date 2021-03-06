const cookieParser = require('cookie-parser');
const express = require('express');
const methodOverride = require('method-override');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { resolve } = require('path');
const socketio = require('socket.io');

require('dotenv').config();

// importing middleware
const authMiddleware = require('./middleware/auth')();
const socketConfig = require('./sockets/socketConfig');
const connectDB = require('./config/db');

connectDB();

// Initialise Express instance
const app = express();

const webpackConfig = require('./webpack_conf/webpack.dev');

const userModel = require('./models/userModel');
const boardModel = require('./models/boardModel');
const characterModel = require('./models/characterModel');

const UserController = require('./controllers/userController');
const BoardController = require('./controllers/boardController');
const CharacterController = require('./controllers/characterController');

const UserRoutes = require('./routes/userRoutes');
const BoardRoutes = require('./routes/boardRoutes');
const CharacterRoutes = require('./routes/characterRoutes');

const userController = new UserController(userModel);
const boardController = new BoardController(boardModel);
const characterController = new CharacterController(characterModel);

const userRoutes = new UserRoutes(userController, authMiddleware).routes();
const boardRoutes = new BoardRoutes(boardController, authMiddleware).routes();
const characterRoutes = new CharacterRoutes(characterController, authMiddleware).routes();

// Set the Express view engine to expect EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));
// Expose the files stored in the distribution folder
app.use(express.static('dist'));

// Set up Webpack in dev env
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    // html only
    writeToDisk: (filePath) => /\.html$/.test(filePath),
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

app.use('/users', userRoutes);
app.use('/boards', boardRoutes);
app.use('/characters', characterRoutes);

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(resolve('dist', 'main.html'));
});

app.get('*', (req, res) => {
  console.log(req.url);
  res.redirect('/');
});

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
const server = app.listen(PORT, () => { console.log(`App is listening to port ${PORT}`); });

const io = socketio(server);
socketConfig(io);
