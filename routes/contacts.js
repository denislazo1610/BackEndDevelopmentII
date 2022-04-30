const express = require("express");
const router = express.Router();

const {
  gettingInfoContacts,
  gettingSingleContact,
} = require("../controller/contacts");

router.get("/", gettingInfoContacts);

router.get("/:id", gettingSingleContact);

module.exports = router;
