/* globals require module */

module.exports = function (data) {
    return {
        getArticleDetails(req, res) {
            let id = req.params.id;
            data.getSimpleArticleById(id)
                .then(() => {
                    data.getArticleDetailsById(id)
                        .then(articleDetails => {
                            res.render("../views/articles/details-article", {
                                result: articleDetails
                            });
                        });
                });
        }
    }
};