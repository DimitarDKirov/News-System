/* globals require module */

const passport = require("passport");

module.exports = function(data) {
    return {
        getArticleDetails(req, res) {
            data.getSimpleArticleById(req.params.id)
                .then(result => {
                    data.getArticleDetailsBySourceAndTitle(result)
                        .then(articleDetails => {
                            //console.log(req.isAuthenticated());
                            res.render("../views/articles/details-article", {
                                result: articleDetails,
                                user: req.user
                            });
                        });
                });
        }
    }
};