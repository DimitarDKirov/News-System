'use strict';

const passport = require("../config/passport");

module.exports = function(data) {
    return {
        home(req, res) {
            res.render("../views/articles/simple-article-list");
        },
        login(req, res) {
            res.render("../views/users/login");
        },
        profile(req, res) {
            console.log("user: " + req.user);
            if (req.user === undefined) {
                return res.render("../views/users/user-not-loged-in", {
                    result: req.user
                });
            } else {
                return res.render("../views/users/user-profile", {
                    result: req.user
                });
            }
        },
        unauthorized(req, res) {
            res.status(401).render("../views/users/unauthorized");
        },
        register(req, res) {
            res.status(200)
                .render("../views/users/register");
        },
        selectMedia(req, res) {
            res.status(200)
                .render("../views/sources/select-media");
        }
    }
}