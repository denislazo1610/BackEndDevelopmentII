const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("HJordi Castro");
// });

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("this is running");
});
