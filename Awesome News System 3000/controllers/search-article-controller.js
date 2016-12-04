/* globals require module */

module.exports = function(data) {
    return {
        searchArticles(req, res) {
            if (!req.query.search === "") {
                data.getSimpleArticleByName(req.query.search)
                    .then(article => {
                        res.render("../views/articles/simple-article-list", {
                            result: article,
                            user: req.user
                        });
                    })
            } else {
                res.redirect("/");
            }
        }
    }
};