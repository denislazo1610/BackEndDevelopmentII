// const { getMaxListeners } = require('../DB/schemaContact');
const contact = require('../DB/schemaContact');

const gettingInfoContacts = (req, res) => {
  contact.find().then((result) => {
    res.send(result);
  });
};

const gettingSingleContact = (req, res) => {
  contact.findById(req.params.id).then((result) => {
    res.send(result);
  });
};

const deletingSingleContact = (req, res) => {
  contact.findByIdAndDelete(req.params.id);
};

const creatingNewContact = (req, res) => {
  var newContacto = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  contact.insertMany(newContacto);
};

const updatingContact = (req, res) => {
  var updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  contact.findByIdAndUpdate(req.params.id, updatedContact, function () {
    console.log('Updated!');
  });
};

module.exports = {
  gettingInfoContacts,
  gettingSingleContact,
  deletingSingleContact,
  creatingNewContact,
  updatingContact
};
