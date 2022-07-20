const express = require('express');

const router = express.Router();

const BaseRoutes = require('./baseRoutes');

class CharacterRoutes extends BaseRoutes {
  routes() {
    /* no auth routes */
    router.get('/test', this.controller.test.bind(this.controller));
    router.get('/getAllChar', this.controller.getAll.bind(this.controller));
    router.get('/getByIdChar/:id', this.controller.getOne.bind(this.controller));
    router.post('/createChar', this.controller.createOne.bind(this.controller));
    /* auth routes */
    //    this.router.use(this.authMiddleware);
    //  this.router.get('/testAuth', this.controller.test.bind(this.controller));
    return router;
  }
}

module.exports = CharacterRoutes;
