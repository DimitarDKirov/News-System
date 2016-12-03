/* globals require module */

let passport = require("passport");

module.exports = function(data) {
    return {
        getSimpleArticles(req, res) {
            if (req.query.page === undefined) {
                req.query.page = 1;
            }

            if (isNaN(req.query.page)) {
                res.render("../views/articles/page-not-found");
                return;
            }

            data.getAllItems()
                .then(selectedMedia => {
                    if (req.isAuthenticated()) {
                        selectedMedia = req.user.selectedMedia;
                    }

                    data.getNewestSimpleArticles(req.query.page, selectedMedia)
                        .then(simpleArticles => {
                            res.render("../views/articles/pagination", {
                                result: simpleArticles
                            });
                        })
                        .catch(err => {
                            res.render("../views/articles/page-not-found");
                        });
                });
        }
    }
};