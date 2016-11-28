/* globals require module */

const express = require("express");

module.exports = function(app, data) {
    let router = new express.Router();
    let controller = require("../controllers/simpleArticle-controller")(data);

    router.get("/", controller.getSimpleArticles);

    app.use("/home", router);
}