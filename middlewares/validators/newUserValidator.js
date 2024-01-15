const { body } = require('express-validator');

// validator function used to check registered user details
const newUser = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Cannot be empty')
    .isString()
    .withMessage('Must be a string')
    .isLength({ min: 3 })
    .withMessage('Cannot be less than 3 letters')
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Not a valid email')
    .normalizeEmail()
    .escape(),
  body('password')
    .notEmpty()
    .withMessage('Cannot be empty')
    .isLength({ min: 4, max: 10 })
    .withMessage('password length must be between 4 & 10')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .withMessage('Password must contain both letters and numbers'),
];

module.exports = newUser;
