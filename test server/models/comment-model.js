/* globals module require */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
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
});

mongoose.model("Comment", schema);

module.exports = mongoose.model("Comment");