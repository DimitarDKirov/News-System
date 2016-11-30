/* globals module Promise*/

module.exports = function(models) {
    let detailedArticle  = models.detailedArticle;
    return {
        getArticleDetailsById(id) {
            return new Promise((resolve, reject) => {
                detailedArticle.findOne({ _id: id }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article);
                });
            });
        }
    }
}