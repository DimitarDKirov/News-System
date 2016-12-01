'use strict';

const hashing = require('../utils/hashing');

module.exports = function (models) {

    let User = models.user;

    return {
        createNewUser(user) {
            const salt = hashing.generateSalt();
            const passHash = hashing.hashPassword(salt, user.password);

            const newUser = new User({
                name: user.name,
                email: user.email,
                passHash,
                salt,
                roles: user.roles || "standard",
                favouriteArticles: user.favouriteArticles || [],
                selectedMedia: user.selectedMedia || []
            });

            return new Promise((resolve, reject) => {
                newUser.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(newUser);
                });
            });
        },
        getUserById(id) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    _id: id
                }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getUserByName(name) {
            return new Promise((resolve, reject) => {
                User.findOne({ name: name }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
            });
        },
        getAllUsers() {
            return new Promise((resolve, reject) => {
                User.find((err, users) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(users);
                });
            });
        }
    }
};