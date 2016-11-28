/* globals module require */

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    }
});

mongoose.model("SelectedMedia", schema);

module.exports = mongoose.model("SelectedMedia");