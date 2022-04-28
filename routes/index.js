const express = require("express");
const router = express.Router();

// const controller = require("../controller/index");
const contact = require("../DB/schema");

// router.get("/", controller.message);
router.get("/contacts", (req, res) => {
  if (req.query.id) {
    contact.findById(req.query.id).then((result) => {
      res.send(result);
    });
  } else {
    contact.find().then((result) => {
      res.send(result);
    });
  }
});

module.exports = router;
