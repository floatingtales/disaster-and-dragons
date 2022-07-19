const express = require('express');

const router = express.Router();

class CharacterRoutes {
  constructor(controller, authMiddleware) {
    this.controller = controller;
    this.authMiddleware = authMiddleware;
  }

  routes() {
    /* no auth routes */
    router.get('/test', this.controller.test.bind(this.controller));
    /* auth routes */
    router.use(this.authMiddleware);

    return router;
  }
}

module.exports = CharacterRoutes;
