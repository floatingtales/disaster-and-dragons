const BaseController = require('./baseController');

class BoardController extends BaseController {
  test(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.json({ boardName: 'test' });
  }

  async testMake(req, res) {
    console.log(req.url);
    console.log(this.model);
    await this.model.create({ boardName: 'test' });
    res.json('made test board');
  }
}

module.exports = BoardController;
