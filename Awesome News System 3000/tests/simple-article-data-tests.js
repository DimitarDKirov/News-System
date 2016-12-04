/* globals require describe it beforeEach afterEach done */

const chai = require("chai");
const sinonModule = require("sinon");

let expect = chai.expect;

describe("Tests Simple Article Data", () => {
    let sinon;

    beforeEach(() => {
        sinon = sinonModule.sandbox.create();
    });

    class SimpleArticle {
        constructor(article) {
            this.source = article.source;
            this.title = article.title;
            this.imageUrl = article.urlToImage;
            this.publishedAt = article.publishedAt;
        }

        paginate() {

        }
        static find() {

        }
        static findOne() {

        }
    }

    let data = require("../data/simple-article-data")({ SimpleArticle });

    describe("Test getNewestSimpleArticles()", () => {
        it("Expext to return 2 simple articles", done => {
            //arrange
            let simpleArticles = ["Firt Article", "Second Article"];

            sinon.stub(SimpleArticle, "find", cb => {
                cb(null, articles);
            });

            sinon.stub(SimpleArticle.prototype, "paginate", cb => {
                cb(null);
            });

            //act
            data.getNewestSimpleArticles()
                .then(actualSimpleArticles => {
                    //assert
                    expect(actualSimpleArticles).to.eql(simpleArticles);
                    done();
                });
        });
    });

    describe("Test getSimpleArticleById(id)", () => {
        let existingSimpleArticleId = 1;
        let simpleArticle = {
            _id: existingSimpleArticleId,
            title: "John is the guy"
        };

        let simpleArticles = [simpleArticle];

        beforeEach(() => {
            sinon.stub(SimpleArticle, "findOne", (query, cb) => {
                let id = query._id;
                let foundSimpleArticle = simpleArticles.find(x => x._id === id);
                cb(null, foundSimpleArticle);
            });
        });

        afterEach(() => {
            sinon.restore();
        });

        it("Expect to return the simple article", done => {

            data.getSimpleArticleById(existingSimpleArticleId)
                .then((actualSimpleArticle => {
                    expect(actualSimpleArticle.title).to.equal(simpleArticle.title);
                    done();
                }));
        });

        it("Expect to return null if no simple article is found", done => {

            data.getSimpleArticleById(existingSimpleArticleId + 1)
                .then((actualSimpleArticle => {
                    expect(actualSimpleArticle.title).to.equal(null);
                    done();
                }));
        });
    });

    describe("Test getSimpleArticleByName(input)", () => {
        let existingSimpleArticleId = 1;
        let existingSimpleArticleName = "John is the guy"
        let simpleArticle = {
            _id: existingSimpleArticleId,
            title: existingSimpleArticleName
        };

        let simpleArticles = [simpleArticle];

        beforeEach(() => {
            sinon.stub(SimpleArticle, "findOne", (query, cb) => {
                let title = query.title;
                let foundSimpleArticle = simpleArticles.find(x => x.title === title);
                cb(null, foundSimpleArticle);
            });
        });

        afterEach(() => {
            sinon.restore();
        });

        it("Expect to return the simple article", done => {

            data.getSimpleArticleByName(existingSimpleArticleName)
                .then((actualSimpleArticle => {
                    expect(actualSimpleArticle.title).to.equal(simpleArticle.title);
                    done();
                }));
        });

        it("Expect to return null if no simple article is found", done => {

            data.getSimpleArticleByName("Hello")
                .then((actualSimpleArticle => {
                    expect(actualSimpleArticle.title).to.equal(null);
                    done();
                }));
        });
    });

});