/* globals require module */

module.exports = function(data) {
    return {
        getArticleDetails(req, res) {
            data.getArticleDetails(req.params.id)
                .then(articleDetails => {
                    res.render("articleDetails", {
                        result: articleDetails
                    });
                });
        }
    }
};