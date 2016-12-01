/* globals require module */

const express = require("express");

module.exports = function(app, data) {
    let commonRouter = new express.Router();
    let commonController = require("../controllers/common-controller")(data);

    commonRouter
        .get("/about", commonController.about);

    app.use("/", commonRouter);
}