const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('Database connected!!');
  } catch (error) {
    console.log('Database connection error!!!');
  }
};

module.exports = db;
