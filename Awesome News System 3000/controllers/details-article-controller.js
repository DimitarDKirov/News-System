/* globals require module */

module.exports = function(data) {
    return {
        getArticleDetails(req, res) {
            data.getSimpleArticleById(req.params.id)
                .then(result => {
                    data.getArticleDetailsBySourceAndTitle(result)
                        .then(articleDetails => {
                            res.render("../views/articles/details-article", {
                                result: articleDetails
                            });
                        });
                });
        }
    }
};