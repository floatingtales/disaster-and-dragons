const express = require('express');

const router = express.Router();

const BaseRoutes = require('./baseRoutes');

class UsersRoutes extends BaseRoutes {
  routes() {
    /* no auth routes */
    router.post('/signup', this.controller.signup.bind(this.controller));
    router.post('/login', this.controller.login.bind(this.controller));
    /* auth routes */
    router.use(this.authMiddleware);

    return router;
  }
}

module.exports = UsersRoutes;
