const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { db } = require('../models/userModel');
const BaseController = require('./baseController');

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  test(req, res) {
    console.log(this.db);
    console.log(req.url);
    res.send('testing route');
  }

  async signup(req, res) {
    console.log(req.body);
    const { username, email, password } = req.body;
    // jwt and bcrypt
    try {
      const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
      console.log('Hashed password', hashedPassword);
      // eslint-disable-next-line max-len
      const newUser = await this.model.create({ username, email, password: hashedPassword });
      console.log('from newuser');
      console.log(newUser);
      const payLoad = { id: newUser.id, userName: newUser.username, email: newUser.email };
      console.log('payload', payLoad);
      const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP });
      return res.json({ newUser, token });
    } catch (err) {
      console.log(err);
      return res.status(500).send('There was an error in the server');
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    // get data from db where
    try {
      const checkUser = await this.model.findOne({ email });
      // check the password from db and compare using hash.compare
      const dbPassword = checkUser.password;
      const correctPassword = await bcrypt.compare(password, dbPassword);
      if (correctPassword === true) {
      // put in logic the logic to generate and give jwt token
        const payLoad = { id: checkUser.id, userName: checkUser.username, email: checkUser.email };
        const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP });
        return res.json({ accessToken: token });
      } if (correctPassword === false) {
        console.log('wrong password');
        return res.send('Wrong Password');
      }
      console.log('Password is wrong');
      res.send('Wrong password');
    } catch (err) {
      console.log('error:', err);
      return res.status(500).send('There was an error in the server');
    }
  }

  async testGet(req, res) {
    console.log(this.model);
    console.log(req.url);
    const data = await this.model.find().exec();
    console.log(data);
    res.send(data);
  }

  async testSet(req, res) {
    console.log(this.model);
    console.log(req.url);
    const testData = await this.model.create(req.body);
    res.send(testData);
  }
}

module.exports = UserController;
