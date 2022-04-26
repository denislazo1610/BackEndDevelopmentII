const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HJordi Castro");
});

app.listen(3000);
