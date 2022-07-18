const cookieParser = require('cookie-parser');
const express = require('express');
const methodOverride = require('method-override');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const { resolve } = require('path');

require('dotenv').config();

// importing middleware
const authMiddleware = require('./middleware/auth')();

const connectDB = require('./config/db');

connectDB();

const userModel = require('./models/userModel');

const webpackConfig = require('./webpack_conf/webpack.dev');

const UserController = require('./controllers/userController');

const UserRoutes = require('./routes/userRoutes');

const userController = new UserController(userModel);

const userRoutes = new UserRoutes(userController, authMiddleware).routes();

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
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

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(resolve('dist', 'main.html'));
});

app.get('*', (req, res) => {
  console.log(req.url);
  res.status(404).send('not-found');
});

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => { console.log(`App is listening to port ${PORT}`); });
