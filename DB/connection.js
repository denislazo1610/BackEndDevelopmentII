const mongoose = require("mongoose");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0.fcn6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
