/* globals require module */

module.exports = function(data) {
    return {
        getSimpleArticles(req, res) {
            data.getNewestSimpleArticles()
                .then(simpleArticles => {
                    res.render("../views/articles/simple-article-list", {
                        result: simpleArticles
                    });
                });
        }
    }
};