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

const gettingSingleContact = (req, res, next) => {
  const id = req.params.id;
  contact
    .findById(id)
    .then((result) => {
      // !result ? next(createError(405, 'Not Contact found')) : res.send(result);
      if (!result) {
        throw createError(405, 'Not contact found');
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
      next(error);
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
  var newContacto = req.body;

  try {
    const { value, error } = schemaContactValidation.validate(newContacto);

    // If error exists from validation, then it will create an error with a message and its status
    if (error) throw createError(405, 'Input invalid, check if you email is correct');
    contact.insertMany(newContacto);
    res.send(newContacto);
  } catch (error) {
    res.status(500).json({ message: error });
    next(error);
  }
};

const updatingContact = (req, res) => {
  var updatedContact = req.body;

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
