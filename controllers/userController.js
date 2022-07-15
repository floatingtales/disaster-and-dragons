const bcrypt = require('bcrypt');
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

  signup(req, res) {
    console.log(this.db);
    console.log(req.body);
    res.send('got the data', req.body);
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
