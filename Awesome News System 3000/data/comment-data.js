/* globals module Promise*/

module.exports = function (models) {
    let detailedArticle = models.detailedArticle;
    let Comment = models.comment;

    return {
        getCommentsByArticle(articleId) {
            return new Promise((resolve, reject) => {
                detailedArticle.findOne({ _id: articleId }, (err, article) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(article.comments);
                });
            });
        },
        addComment(articleId, comment) {
            const newComment = new Comment({
                author: comment.author,
                content: comment.content,
                date: comment.date
            });
            return new Promise((resolve, reject) => {
                newComment.save(err => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(newComment);
                })
            });
        }
    }
}