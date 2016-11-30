'use strict';

const express = require("express");
const passport = require("../config/passport");
const createUsersController = require("../controllers/users-controller");
const createAuthController = require("../controllers/auth-controller");
const data = require("../data");

const authController = createAuthController(data);
const usersController = createUsersController(data);

const usersRouter = express.Router();

usersRouter 
    .get("/", usersController.home)
    .get("/home", usersController.home)
    .get("/login", usersController.login)
    .post("/login", authController.login)
    .get("/register", usersController.register)
    .post("/register", authController.register)
    .get("/profile", usersController.profile)
    .get("/unauthorized", usersController.unauthorized)
    .post("/logout", authController.logout);

module.exports = function (app) {
    app.use("/user", usersRouter);
}