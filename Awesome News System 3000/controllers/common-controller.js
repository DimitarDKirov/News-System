'use strict';

const passport = require("../config/passport");

module.exports = function (data) {
    return {
        about(req, res) {
            res.render("../views/about");
        }
    }
}