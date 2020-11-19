const db = require("../queries/queries.js");
const express = require("express");
// const jobAppsController = require('../controllers/jobAppsController.js')
const userRouter = express.Router();

userRouter.post("/", db.loginUser);

module.exports = userRouter;
