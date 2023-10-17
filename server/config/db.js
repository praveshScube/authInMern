const mongoose = require("mongoose");
require('dotenv').config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_url}@learnauth.m9btqpk.mongodb.net/?retryWrites=true&w=majority`
  );
};
module.exports = connect;