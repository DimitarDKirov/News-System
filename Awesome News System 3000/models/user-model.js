/* globals module require */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passHash: {
        type: String,
        required: true
    },
    favouriteArticles: [{
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
    }],
    selectedMedia: [{
        name: {
            type: String,
            required: true
        }
    }]
});

mongoose.model("User", schema);

module.exports = mongoose.model("User");