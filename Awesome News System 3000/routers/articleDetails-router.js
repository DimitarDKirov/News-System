/* globals require module */

const express = require("express");

module.exports = function(app, data) {
    let router = new express.Router();
    let controller = require("../controllers/articleDetails-controller")(data);

    router.get("/", controller.getArticleDetails);

    app.use("/article-details", router);
}