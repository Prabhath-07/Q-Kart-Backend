<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// CRIO_SOLUTION_START_MODULE_AUTH
// CRIO_SOLUTION_END_MODULE_AUTH
=======
>>>>>>> fe4cd93bd3608cf6711d97e1d0bacfcd4371248d
const Joi = require("joi");
const { password } = require("./custom.validation");

// TODO: CRIO_TASK_MODULE_AUTH - Define request validation schema for user registration
=======
const Joi = require("joi");
const { password } = require("./custom.validation");

>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
const Joi = require("joi");
const { password } = require("./custom.validation");

>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
const Joi = require("joi");
const { password } = require("./custom.validation");

>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 * - "name": string
 */
const register = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // CRIO_SOLUTION_START_MODULE_AUTH
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
  // CRIO_SOLUTION_END_MODULE_AUTH
=======
>>>>>>> fe4cd93bd3608cf6711d97e1d0bacfcd4371248d
=======
>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
};

/**
 * Check request *body* for fields (all are *required*)
 * - "email" : string and satisyfing email structure
 * - "password": string and satisifes the custom password structure defined in "src/validations/custom.validation.js"
 */
const login = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // CRIO_SOLUTION_START_MODULE_AUTH
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
  // CRIO_SOLUTION_END_MODULE_AUTH
=======
>>>>>>> fe4cd93bd3608cf6711d97e1d0bacfcd4371248d
=======
>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
};

module.exports = {
  register,
  login,
};
