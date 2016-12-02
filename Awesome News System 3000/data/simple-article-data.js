/* globals module Promise*/
let HashIds = require("hashids");
let hashids = new HashIds("AwseomeNewsSystem");

module.exports = function(models) {
    let simpleArticle = models.simpleArticle;
    return {
        getNewestSimpleArticles(page) {
            return new Promise((resolve, reject) => {
                simpleArticle.paginate({}, { page: page, limit: 10, sort: { publishedAt: -1 } }, function(err, result) {
                    if (err) {
                        return reject(err);
                    }

                    if (page > result.pages) {
                        return reject(page);
                    }

                    let res = [];
                    result.docs.forEach(function(element) {
                        let temp = {
                            id: hashids.encodeHex(element.id),
                            source: element.source,
                            title: element.title,
                            imageUrl: element.imageUrl,
                            publishedAt: element.publishedAt
                        };
                        res.push(temp);
                    }, this);

                    return resolve(res);
                });
            });
        },
        getSimpleArticleById(id) {
            return new Promise((resolve, reject) => {
                simpleArticle.findOne({ _id: hashids.decodeHex(id) }, (err, article) => {
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
                    let res = [];
                    article.forEach(function(element) {
                        let temp = {
                            id: hashids.encodeHex(element.id),
                            source: element.source,
                            title: element.title,
                            imageUrl: element.imageUrl,
                            publishedAt: element.publishedAt
                        };
                        res.push(temp);
                    }, this);
                    return resolve(res);
                });
            });
        }
    }
}