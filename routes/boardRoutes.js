const express = require('express');

const router = express.Router();

const BaseRoutes = require('./baseRoutes');

class BoardRoutes extends BaseRoutes {
  routes() {
    /* no auth routes */
    router.get('/test', this.controller.test.bind(this.controller));
    router.get('/testMake', this.controller.testMake.bind(this.controller));
    router.get('/allChats/:boardName', this.controller.getOne.bind(this.controller));
    /* auth routes */
    router.use(this.authMiddleware);

    return router;
  }
}

module.exports = BoardRoutes;
