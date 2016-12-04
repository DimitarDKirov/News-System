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
        },
        addArticleToFavorites(req, res) {
            data.getDetailedArticleById(req.params.id)
                .then(article => {
                    let isContained = 0;
                    req.user.favouriteArticles.forEach(function(element) {
                        if (element.title === article.title) {
                            isContained += 1;
                        }
                    }, this);
                    if (isContained === 0) {
                        data.addArticleToUserFavorites(req.user, article, req.params.id)
                            .then(() => {
                                res.redirect("/");
                            })
                    } else {
                        res.redirect("/")
                    }
                })
        }
    }
};