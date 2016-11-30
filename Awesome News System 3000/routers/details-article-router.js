/* globals require module */

const express = require("express");

module.exports = function (app, data) {
    let detailedArticleRouter = new express.Router();
    let detailsArticleController = require("../controllers/details-article-controller")(data);

    detailedArticleRouter
        .get("/", detailsArticleController.getArticleDetails)
        .get("/:id", detailsArticleController.getArticleDetails);

    app.use("/article-details", detailedArticleRouter);
}