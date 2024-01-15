const { validationResult } = require('express-validator');

// function to return the errors found by express-validator
const validateRequest = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).send({
      status: 'failed',
      errors: error.array(),
    });
  } else {
    next();
  }
};

module.exports = validateRequest;
