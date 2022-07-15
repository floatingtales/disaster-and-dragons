const bcrypt = require('bcrypt');
const { db } = require('../models/userModel');
const BaseController = require('./baseController');

class UserController extends BaseController {
  constructor(model) {
    super(model);
    bcrypt.genSalt(10);
  }

  test(req, res) {
    console.log(this.db);
    console.log(req.url);
    res.send('testing route');
  }

  async signup(req, res) {
    console.log(req.body);
    // jwt and bcrypt
    try {
      await this.model.create({ username: req.body.username, email: req.body.email, password: req.body.password });
      res.send('Done');
    } catch (err) {
      console.log(err);
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
