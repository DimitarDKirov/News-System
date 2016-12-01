/* globals module Promise*/

module.exports = function(models) {
    let simpleArticle = models.simpleArticle;
    return {
        getNewestSimpleArticles(page) {
            return new Promise((resolve, reject) => {
                simpleArticle.paginate({}, { page: page, limit: 10, sort: { publishedAt: -1 } }, function(err, result) {
                    if (err) {
                        return reject(err);
                    }

                    if (page > result.total) {
                        return reject(page);
                    }

                    return resolve(result.docs);
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