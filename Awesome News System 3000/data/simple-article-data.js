/* globals module Promise*/

module.exports = function (models) {
    let simpleArticle = models.simpleArticle;
    return {
        getNewestSimpleArticles() {
            return new Promise((resolve, reject) => {
                simpleArticle.find((err, articles) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(articles);
                });
            });
        },
        getSimpleArticleById(id) {
            return new Promise((resolve, reject) => {
                simpleArticle.findOne({ _id: id }, (err, simpleArticle) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(simpleArticle);
                });
            });
        }
    }
}