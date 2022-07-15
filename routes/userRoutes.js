const express = require('express');

const router = express.Router();

class UsersRoutes {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    /* axios routes */
    router.get('/test', this.controller.test.bind(this.controller));
    router.post('/signup', this.controller.signup.bind(this.controller));
    return router;
  }
}

module.exports = UsersRoutes;
