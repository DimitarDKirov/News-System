/* globals module Promise*/

module.exports = function(models) {
    let { articleDetails } = models;
    return {
        getArticleDetails(id) {
            return new Promise((resolve, reject) => {
                articleDetails.findOne({ _id: id }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article);
                });
            });
        }
    }
}