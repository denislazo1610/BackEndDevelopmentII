const contact = require("../DB/schemaContact");

gettingInfoContacts = (req, res) => {
  contact.find().then((result) => {
    res.send(result);
  });
};

gettingSingleContact = (req, res) => {
  contact.findById(req.params.id).then((result) => {
    res.send(result);
  });
};

module.exports = { gettingInfoContacts, gettingSingleContact };
