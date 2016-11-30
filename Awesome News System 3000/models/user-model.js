/* globals module require */

const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
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

let User;
userSchema.static('getUser', (user) => {
    return new User({
        name: user.name,
        email: user.email,
        passHash: user.passHash,
        favouriteArticles: user.favouriteArticles || [],
        selectedMedia: user.selectedMedia || []
    });
});

mongoose.model("User", userSchema);
module.exports = mongoose.model("User");