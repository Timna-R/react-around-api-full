const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

const validate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(validateURL),
  }),
});

const validateObjId = celebrate({
  // validate parameters
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }).unknown(true),
  headers: Joi.object().keys({
    // validate headers
  }).unknown(true),
  query: Joi.object().keys({
    // validate query
  }).unknown(true),
})

module.exports = {validate, validateObjId};