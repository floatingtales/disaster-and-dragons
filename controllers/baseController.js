class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    console.log(req.url);
    let results;
    try {
      results = await this.model.find();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'error connecting to server' });
    }
    return res.status(200).json({ data: results });
  }

  async getOne(req, res) {
    console.log(req.url);
    const { params, body } = req;
    let result;
    try {
      result = await this.model.findOne({ ...params, ...body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'error connecting to server' });
    }
    return res.status(200).json({ data: result });
  }

  async createOne(req, res) {
    console.log(req.url);
    console.log(req.body);
    console.log(req.header);
    const { body } = req;
    let newEntry;
    try {
      newEntry = await this.model.create({ ...body });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'error connecting to server' });
    }
    return res.status(200).json({ data: newEntry });
  }
}
module.exports = BaseController;
