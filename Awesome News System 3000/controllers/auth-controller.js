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
                    res.json({
                        success: false,
                        message: 'Invalid name or password!'
                    });
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    res.redirect('/user/profile');
                });
            });

            auth(req, res, next);
        },
        logout(req, res) {
            req.logout();
            res.redirect("/home");
        },
        register(req, res) {
            let user = req.body;

            data.createUser(user)
                .then((dbUser) => {
                    res.status(201)
                        .redirect("/user/profile");
                })
                .catch((error) => {
                    res.status(500).json(error);
                })
        }
    }
};