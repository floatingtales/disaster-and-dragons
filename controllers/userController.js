const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const BaseController = require('./baseController');

class UserController extends BaseController {
  test(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.send('yay');
  }

  async signup(req, res) {
    console.log(req.body);
    const { username, email, password } = req.body;
    // jwt and bcrypt
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
    console.log('Hashed password', hashedPassword);
    let newUser;
    try {
      newUser = await this.model.create({ username, email, password: hashedPassword });
      console.log('from newuser');
      console.log(newUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'error connecting to server' });
    }
    const payLoad = { id: newUser.id, userName: newUser.username, email: newUser.email };
    console.log('payload', payLoad);
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP });
    return res.json({ newUser, token });
  }

  async login(req, res) {
    console.log(this.model);
    console.log(req.url);
    const { loginCredentials, password } = req.body;
    // get data from db
    let checkUser;
    try {
      checkUser = await this.model.findOne({ email: loginCredentials }).exec();
      if (!checkUser) {
        checkUser = await this.model.findOne({ username: loginCredentials }).exec();
      }
    } catch (err) {
      console.log('error:', err);
      return res.status(500).json({ msg: 'error connecting to server' });
    }

    if (!checkUser) {
      return res.status(500).json({ msg: 'user not found' });
    }

    // check the password from db and compare using hash.compare
    const dbPassword = checkUser.password;
    const correctPassword = await bcrypt.compare(password, dbPassword);
    if (correctPassword) {
      // generate jwt
      const payLoad = { id: checkUser.id, userName: checkUser.username, email: checkUser.email };
      const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP });
      return res.json({ accessToken: token });
    }
    console.log('Password is wrong');
    return res.send('Wrong password');
  }

  loginCheck(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.status(200).json({ msg: 'is logged in' });
  }
}

module.exports = UserController;
