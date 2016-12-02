'use strict';


function isLoggedIn(req, res) {
    return req.isAuthenticated();
}

module.exports = {
    isLoggedIn
}