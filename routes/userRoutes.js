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
    router.use(this.authMiddleware);
    router.get('/test', this.controller.test.bind(this.controller));
    router.get('/testget', this.controller.testGet.bind(this.controller));
    router.post('/testset', this.controller.testSet.bind(this.controller));
    return router;
  }
}

module.exports = UsersRoutes;
