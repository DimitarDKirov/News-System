/* globals module Promise*/

module.exports = function(models) {
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
                simpleArticle.findOne({ _id: id }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    let searchObj = {
                        source: article.source,
                        title: article.title
                    };

                    return resolve(searchObj);
                });
            });
        },
        getSimpleArticleByName(input) {
            return new Promise((resolve, reject) => {
                simpleArticle.find({ "title": { "$regex": String(input), "$options": "i" } }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(article);
                });
            });
        }
    }
}