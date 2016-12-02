/* globals require module */

const passport = require("passport");

module.exports = function (data) {
    return {
        getAllSources(req, res) {

            data.getAllSourceItems()
                .then(sourceItems => {
                    if (req.isAuthenticated()) {
                        res.render("../views/sources/select-media", {
                            result: sourceItems
                        });
                    }
                    else {
                        res.render("../views/sources/sources-list", {
                            result: sourceItems
                        });
                    }

                    return;
                })
                .catch(err => {
                    res.render("../views/articles/page-not-found");
                });
        },
        saveSelectedSourceIremsToUser(req, res) {
            let selectedSourceItems = req.body;
            console.log(selectedSourceItems);

            
        },
    }
}