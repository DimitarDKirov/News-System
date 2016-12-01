'use strict';

const passport = require('passport');
const data = require("../../data");
const localStrategy = require("./local-strategy")(passport, data);

module.exports = (app, data) => {
    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user.id);
        }
    });

    passport.deserializeUser((userId, done) => {
        data
            .getUserById(userId)
            .then(user => done(null, user || false))
            .catch(error => done(error, false));
    });

    app.use(passport.initialize());
    app.use(passport.session());
};