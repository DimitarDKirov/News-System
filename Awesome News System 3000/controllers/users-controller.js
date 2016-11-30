'use strict';

const passport = require("../config/passport");

module.exports = function (data) {
    return {
        home(req, res) {
            res.render("../views/articles/simple-article-list");
        },
        login(req, res) {
            res.render("../views/users/login");
        },
        profile(req, res) {
            if (!req.isAuthenticated()) {
                res.status(401)
                    .redirect("/unauthorized");
            }
            else {
                res.render("../views/users/user-profile", {
                    result: user
                });
            }
        },
        unauthorized(req, res) {
            res.send(`Not authorized. Need authentication.`);
        },
        register(req, res) {
            res.status(200)
                .render("../views/users/register");
        }
    }
}