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
    router.get('/testget', this.controller.testGet.bind(this.controller));
    router.post('/testset', this.controller.testSet.bind(this.controller));
    return router;
  }
}

module.exports = UsersRoutes;
