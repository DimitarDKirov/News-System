/* globals module require */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
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
    },
    author: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    comments: [{
        author: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }]
});

mongoose.model("ArticleDetails", schema);

module.exports = mongoose.model("ArticleDetails");