const express = require("express");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");


const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Reroute all API requests beginning with the `/v1/users` route to Express router in user.route.js
// CRIO_SOLUTION_START_MODULE_UNDERSTANDING_BASICS
router.use("/users", userRoute);
// CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS
router.use("/auth", authRoute);
router.use("/products", productRoute);

// CRIO_SOLUTION_START_MO

module.exports = router;
