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

  async createBoard(req, res) {
    console.log(req.url);
    console.log(this.model);
    const name = req.body.boardName;
    await this.model.create({ boardName: name });
    // get the id from db to put into storage
    res.json('made test board');
  }

  async getAll(req, res) {
    const allBoards = await this.model.find();
    return res.json(allBoards);
  }

  async getOne(req, res) {
    console.log('running in getOne');
    console.log(req.body);
    const allBoards = await this.model.find();
    return res.json(allBoards);
  }
}

module.exports = BoardController;
