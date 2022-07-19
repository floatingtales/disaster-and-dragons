const express = require('express');

const router = express.Router();

class UsersRoutes {
  constructor(controller, authMiddleware) {
    this.controller = controller;
    this.authMiddleware = authMiddleware;
  }

  routes() {
    /* axios routes */
    router.post('/signup', this.controller.signup.bind(this.controller));
    router.post('/login', this.controller.login.bind(this.controller));
    /* auth routes */
    router.use(this.authMiddleware);

    return router;
  }
}

module.exports = UsersRoutes;
