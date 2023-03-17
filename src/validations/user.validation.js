<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// CRIO_SOLUTION_START_MODULE_UNDERSTANDING_BASICS
// CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS
const Joi = require("joi");
const { objectId } = require("./custom.validation");

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement request validation for "/v1/users/:userId" endpoint
=======
const Joi = require("joi");
const { objectId } = require("./custom.validation");

>>>>>>> fe4cd93bd3608cf6711d97e1d0bacfcd4371248d
=======
const Joi = require("joi");
const { objectId } = require("./custom.validation");

>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
const Joi = require("joi");
const { objectId } = require("./custom.validation");

>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
const Joi = require("joi");
const { objectId } = require("./custom.validation");

>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
/**
 * Example url: `/v1/users/:userId`
 * Validate the "userId" url *params* field. "userId" value should be a
 * - string
 * - valid Mongo id -> Use the helper function in src/validations/custom.validation.js
 */
const getUser = {
  params: Joi.object().keys({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // CRIO_SOLUTION_START_MODULE_UNDERSTANDING_BASICS
    userId: Joi.string().custom(objectId),
    // CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS
=======
>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
  }),
};

const setAddress = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    address: Joi.string().required().min(20),
  }),
};

module.exports = {
  getUser,
  setAddress,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }),
};


module.exports = {
  getUser,
>>>>>>> fe4cd93bd3608cf6711d97e1d0bacfcd4371248d
=======
>>>>>>> a5aaee7d50250441fa7848beebd3da8843a6801c
=======
>>>>>>> 651c95a99824d866ebe55b5992d0f3e18de17a3d
=======
>>>>>>> 9da2bce53360eb0c9f75f6b49bf598d3f5009af6
};
