const BaseController = require('./baseController');

class CharacterController extends BaseController {
  test(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.send('yay');
  }
}

module.exports = CharacterController;
