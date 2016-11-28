/* globals require module */
"use strict";

module.exports = function(models) {
    return {
        createArticle(currentArticle) {
            let Article = models.article;
            let article = new Article({
                source: currentArticle.source,
                author: currentArticle.author,
                title: currentArticle.title,
                description: currentArticle.description,
                url: currentArticle.url,
                imageUrl: currentArticle.urlToImage,
                publishedAt: currentArticle.publishedAt,
                comments: currentArticle.comments
            });

            return new Promise((resolve, reject) => {
                article.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article);
                });
            });
        },
        createSimpleArticle(currentSimpleArticle) {
            let SimpleArticle = models.simpleArticle;

            let simpleArticle = new SimpleArticle({
                source: currentSimpleArticle.source,
                title: currentSimpleArticle.title,
                imageUrl: currentSimpleArticle.urlToImage,
                publishedAt: currentSimpleArticle.publishedAt
            });

            return new Promise((resolve, reject) => {
                simpleArticle.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(simpleArticle);
                });
            });
        }
    };
};