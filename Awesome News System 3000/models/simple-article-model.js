/* globals module require */

const mongoose = require("mongoose");

let simpleArticleSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    publishedAt: {
        type: String
    }
});

mongoose.model("SimpleArticle", simpleArticleSchema);
module.exports = mongoose.model("SimpleArticle");