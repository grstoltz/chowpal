const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/google')
  .get(userController.login);
