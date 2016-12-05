/* globals require module */

module.exports = function(data) {
    return {
        getComments(req, res) {
            const articleId = req.query.articleId;
            data.getDetailedArticleById(articleId)
                .then(article => {
                    res.status(200).send(article.comments);
                })
                .catch(() => {
                    res.status(404).send("Can not get comments");
                })

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

            const articleId = req.body.articleId;

            data.addComment(null, newComment)
                .then((comment) => {
                    return data.addCommentByArticle(articleId, comment);
                })
                .then(article => {
                    return res.status(201).send(JSON.stringify(article.comments));
                })
                .catch(err => {
                    return res.status(400).send(err);
                });
        }
    }
};