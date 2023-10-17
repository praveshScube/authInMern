const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pravesh:Admin123@learnauth.m9btqpk.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;