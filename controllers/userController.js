const { matchedData } = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const tokenGenerator = require('../utils/tokenGenerator');

const getUser = (req, res) => {
  res.send('Express works');
};

const createUser = async (req, res) => {
  try {
    const data = matchedData(req); // validated data
    const { name, email } = data;
    const password = await bcrypt.hash(data.password, 10); // password hashed here
    const user = new User({
      name,
      email,
      password,
    });
    await user.save(); // save user to db
    const token = tokenGenerator(user._id);
    user.password = undefined;
    return res.status(201).json({
      status: 'success',
      data: { user, token },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: 'Database error',
      data: '',
    });
  }
};

module.exports = {
  getUser,
  createUser,
};
