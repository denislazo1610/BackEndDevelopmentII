const mongoose = require("mongoose");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.fcn6k.mongodb.net/user?retryWrites=true&w=majority`;

const connectDB = () => {
  mongoose.connect(URI);
  console.log("db connected..!");
};

module.exports = connectDB;
