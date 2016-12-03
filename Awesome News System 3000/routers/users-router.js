'use strict';

module.exports = function(app, data) {
    const express = require("express");
    const usersController = require("../controllers/users-controller")(data);
    const authController = require("../controllers/auth-controller")(data);

    const usersRouter = express.Router();

    usersRouter
        .get("/", usersController.home)
        .get("/home", usersController.home)
        .get("/login", usersController.login)
        .post("/login", authController.login)
        .get("/register", usersController.register)
        .post("/register", authController.register)
        .get("/profile", usersController.profile)
        .get("/logout", authController.logout)
        .get("/unauthorized", usersController.unauthorized);

    app.use("/user", usersRouter);
}