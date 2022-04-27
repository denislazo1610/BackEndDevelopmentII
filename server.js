const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./DB/connection");

connectDB();

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
