/* globals module Promise*/

module.exports = function (models) {
    let detailedArticle = models.detailedArticle;

    return {
        getArticleDetailsBySourceAndTitle(article) {
            return new Promise((resolve, reject) => {
                detailedArticle.findOne({ source: article.source, title: article.title }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article);
                });
            });
        },
        addCommentByArticle(articleId, comment) {
            return new Promise((resolve, reject) => {
                detailedArticle.findOneAndUpdate({ _id: articleId }, { $push: { comments: comment } }, { new: true }, (err, doc) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(doc);
                })
            })
        }
    }
}