// const { getMaxListeners } = require('../DB/schemaContact');
const contact = require('../DB/schemaContact');
const Joi = require('@hapi/joi');
var createError = require('http-errors');
const { schemaContactValidation } = require('../DB/schemaValidation');

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
  contact.findByIdAndDelete(req.params.id, function () {
    console.log('deleted');
    contact.find().then((result) => {
      res.send(result);
    });
  });
};

const creatingNewContact = (req, res, next) => {
  var newContacto = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  try {
    const { value, error } = schemaContactValidation.validate(newContacto);

    if (error) {
      throw createError(404, 'Please, something is off');
    }
  } catch (error) {
    next(error);
  }
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
