/* globals require module */

const express = require("express");

module.exports = function (app, data) {
    let simpleArticlesRouter = new express.Router();
    let homeController = require("../controllers/simple-article-controller")(data);

    simpleArticlesRouter
        .get("/", homeController.getSimpleArticles)
        .get("/home", homeController.getSimpleArticles);

    app.use("/", simpleArticlesRouter);
}