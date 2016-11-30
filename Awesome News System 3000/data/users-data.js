'use strict';

module.exports = function (User) {
    function createUser(inputUser) {
        const user = User.getUser(inputUser);

        return new Promise((resolve, reject) => {
            user.save((err) => {
                if (err) {
                    return reject(err);
                }

                return resolve(user);
            });
        });
    }

    function getUserByName(name) {
        return new Promise((resolve, reject) => {
            User.findOne({
                name
            }, (err, user) => {
                if (err) {
                    return reject(err);
                }

                return resolve(user);
            });
        });
    }

    function getUserById(id) {
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
    }

    function getAllUsers() {
        return new Promise((resolve, reject) => {
            User.find((err, users) => {
                if (err) {
                    return reject(err);
                }

                return resolve(users);
            });
        });
    }

    return {
        createUser,
        getUserByName,
        getUserById,
        getAllUsers
    };
};