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
    router.get('/getAll', this.controller.getAll.bind(this.controller));
    router.get('/getOne', this.controller.getOne.bind(this.controller));
    router.use(this.authMiddleware);
    router.post('/createBoard', this.controller.createBoard.bind(this.controller));

    return router;
  }
}

module.exports = BoardRoutes;
