const bcrypt = require('bcrypt');
const BaseController = require('./baseController');

class UserController extends BaseController {
  constructor(model, db) {
    super(model);
    this.db = db;
    bcrypt.genSalt(10);
  }
}

module.exports = UserController;
