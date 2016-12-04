/* globals require module */

module.exports = function(data) {
    return {
        searchArticles(req, res) {
            if (req.query.search.length !== 0) {
                let searchPhrase = req.query.search
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
                data.getSimpleArticleByName(searchPhrase)
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