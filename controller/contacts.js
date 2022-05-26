// const { getMaxListeners } = require('../DB/schemaContact');
const contact = require('../DB/schemaContact');
const Joi = require('@hapi/joi');
var createError = require('http-errors');
const { schemaContactValidation } = require('../DB/schemaValidation');
const { default: mongoose } = require('mongoose');

const gettingInfoContacts = (req, res, next) => {
  contact
    .find()
    .then((result) => {
      if (result.length == 0) {
        throw createError(405, 'There is nothing');
      } else {
        res.send(result);
      }
    })
    .catch((error) => {
      next(error);
    });
};

const gettingSingleContact = (req, res, next) => {
  const id = req.params.id;
  contact
    .findById(id)
    .then((result) => {
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

const deletingSingleContact = (req, res, next) => {
  const id = req.params.id;
  contact
    .findById(id)
    .then((result) => {
      if (!result) {
        throw createError(405, 'This contact did not exist');
      } else {
        contact.findByIdAndDelete(id, function () {
          contact.find().then((result) => {
            if (result) res.send(result);
          });
        });
      }
    })
    .catch((error) => {
      next(error);
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
    next(error);
  }
};

const updatingContact = (req, res, next) => {
  var updatedContact = req.body;

  try {
    const { value, error } = schemaContactValidation.validate(updatedContact);
    if (error) throw createError(405, 'Input invalid, check if you email is correct');
    contact.findByIdAndUpdate(req.params.id, updatedContact, function () {
      res.send(updatedContact);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  gettingInfoContacts,
  gettingSingleContact,
  deletingSingleContact,
  creatingNewContact,
  updatingContact
};
