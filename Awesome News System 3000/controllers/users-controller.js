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

            data.getUserById(req.body.id)
                .then((user) => {
                    if (!req.isAuthenticated()) {
                        return res.status(401)
                            .redirect("/unauthorized");
                    }
                    else {
                        return res.render("../views/users/user-profile", {
                            result: user
                        });
                    }
                });
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