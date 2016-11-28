/* globals require module */

const express = require("express");
let app = express();
const port = 3001;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newsSystemDb");
mongoose.Promise = global.Promise;

let items = require("./items");

let article = require("./models/articleDetails-model");
let simpleArticle = require("./models/simpleArticle-model");
let models = { article, simpleArticle };

let data = require("./data/articles-data")(models);

save("mirror");
save("the-telegraph");
save("reuters");
save("the-economist");

app.listen(port, () =>
    console.log(`Server running at port: ${port}`)
);

function save(source) {
    let articles;
    if (source === "mirror") {
        articles = items.getAllMirrorItems();
    } else if (source === "the-telegraph") {
        articles = items.getAllTelegraphItems();
    } else if (source === "reuters") {
        articles = items.getAllReutersItems();
    } else if (source === "the-economist") {
        articles = items.getAllTheEconomistItems();
    }

    articles.forEach(article => {
        article.source = source;
        article.comments = [];
        data.createArticle(article);
        data.createSimpleArticle(article);
    });
}