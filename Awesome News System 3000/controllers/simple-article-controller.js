/* globals require module */

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

            data.getNewestSimpleArticles(req.query.page)
                .then(simpleArticles => {
                    res.render("../views/articles/pagination", {
                        result: simpleArticles
                    });
                })
                .catch(err => {
                    res.render("../views/articles/page-not-found");
                });
        }
    }
};