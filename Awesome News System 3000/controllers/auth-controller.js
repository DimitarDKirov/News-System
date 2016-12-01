'use strict';

const passport = require("passport");

module.exports = function (data) {
    return {
        login(req, res, next) {
            const auth = passport.authenticate('local', function (error, user) {
                if (error) {
                    next(error);
                    return;
                }

                if (!user) {
                    res.status(401).redirect("/user/unauthorized");
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    let user = req.user;
                    res.status(200).render("../views/users/user-profile", {
                        result: user
                    });
                });
            });

            auth(req, res, next);
        },
        logout(req, res) {
            req.logout();
            res.redirect("/home");
        },
        register(req, res) {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            };

            data.createNewUser(user)
                .then(dbUser => {
                    res.status(201).json(dbUser);
                })
                .then(() => {
                    res.redirect("../views/users/user-profile")
                })
                .catch(error => res.status(500).json(error));
        }
    }
};