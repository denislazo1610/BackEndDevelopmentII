const Joi = require('@hapi/joi');

const schemaContactValidation = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  favoriteColor: Joi.string().required(),
  birthday: Joi.string().required()
});

module.exports = { schemaContactValidation };
