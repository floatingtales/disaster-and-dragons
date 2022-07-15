const bcrypt = require('bcrypt');
const BaseController = require('./baseController');

class UserController extends BaseController {
  constructor(model, db) {
    super(model);
    this.db = db;
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
}

module.exports = UserController;
