const express = require('express');

const router = express.Router();

// controllers
const userController = require('../controllers/userController');

// middlewares
const validator = require('../middlewares/validationError');
const newUserValidator = require('../middlewares/validators/newUserValidator');

router.get('/', userController.getUser);
router.post(
  '/register',
  newUserValidator,
  validator,
  userController.createUser,
); // create a new user

module.exports = router;
