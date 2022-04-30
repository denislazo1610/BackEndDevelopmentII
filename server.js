const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./DB/connection");

connectDB();

app.get("/", (req, res) => {
  res.send(`Go to /contacts`);
});

app
  .use("/index", require("./routes/index"))
  .use("/contacts", require("./routes/contacts"));

app.listen(port, () => {
  console.log(`this is running on port ${port}`);
});
