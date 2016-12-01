'use strict';

const LocalStrategy = require("passport-local");
const hashing = require("../../utils/hashing");

function comparePassword(requestPassword, user) {
    return hashing.hashPassword(user.salt, requestPassword) === user.passHash;
}

module.exports = function (passport, data) {
    const authStrategy = new LocalStrategy(
        function (name, password, done) {
            data.getUserByName(name)
                .then(user => {
                    if (user && comparePassword(password, user)) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                })
                .catch(error => done(error, false));
        });

    passport.use(authStrategy);
}