/* globals require module */

const passport = require("passport");

module.exports = function (data) {
    return {
        getComments(req, res) {
            // let articleId = req.params.id
            // data.getCommentsByArticle(articleId)
            //     .then(result => {
            //         data.getArticleDetailsBySourceAndTitle(result)
            //             .then(articleDetails => {
            //                 //console.log(req.isAuthenticated());
            //                 res.render("../views/articles/details-article", {
            //                     result: articleDetails
            //                 });
            //             });
            //     });
        },
        createComment(req, res) {
            if (!req.isAuthenticated()) {
                return res.status(401).redirect('/user/login');
            }

            const commentContent = req.body.commentContent;
            if (commentContent === undefined || commentContent.length === 0) {
                return res.status(400).send("Comment can not be empty");
            }
            
            const username = req.user.toObject().username;
            const newComment = {
                author: username,
                content: req.body.commentContent,
                date: new Date()
            };

            const articleId = req.query.articleId;

            data.addComment(null, newComment)
                .then((comment) => {
                    return data.addCommentByArticle(articleId, newComment);
                })
                .then(article => {
                    return res.status(201).redirect(req.get('referer'));
                })
                .catch(err => {
                    return res.status(400).send(err);
                });
        }
    }
};