/* global module require */
"use strict";

const request = require("request");

module.exports = function(apiConfig, config) {
    const requesterData = require("./data")(config);

    let sourcesIds = [];

    function setup() {
        let url =
            `${apiConfig.apiUrlSources}?language=${apiConfig.apiLanguage}&apiKey=${apiConfig.apiKey}`;

        return new Promise((resolve, reject) => {
            request.get(url, (err, responce, body) => {
                if (err) {
                    return reject(err);
                }

                let sources = JSON.parse(body).sources;

                sources.forEach(source => {
                    if (source.sortBysAvailable.indexOf("latest") != -1) {
                        requesterData.pushSourceToDatabase(source);
                        sourcesIds.push(source.id);
                    }
                });

                return resolve({ responce, body });
            })
        });
    }

    function requestArticles() {
        return new Promise((resolve, reject) => {
            sourcesIds.forEach(source => {
                let url =
                    `${apiConfig.apiUrlArticles}?source=${source}&sortyBy=latest&apiKey=${apiConfig.apiKey}`;

                request.get(url, (err, responce, body) => {
                    if (err) {
                        return reject(err);
                    }

                    let articles = JSON.parse(body).articles;

                    articles.forEach(article => {
                        article.source = source;
                        article.comments = [];
                        requesterData.pushSimpleArticleToDatabase(article);
                        requesterData.pushArticleDetailsToDatabase(article);
                    });

                    return resolve({ responce, body });
                });
            });
        });

    }

    return {
        setup,
        requestArticles
    }
};