/* globals require module */

const passport = require("passport");

module.exports = function (data) {
    return {
        getAllSources(req, res) {

            data.getAllSourceItems()
                .then(sourceItems => {
                    if (req.isAuthenticated()) {
                        res.render("../views/sources/select-media", {
                            result: sourceItems,
                            user: req.user
                        });
                    }
                    else {
                        res.render("../views/sources/sources-list", {
                            result: sourceItems,
                            user: req.user
                        });
                    }

                    return;
                })
                .catch(err => {
                    res.render("../views/articles/page-not-found");
                });
        },
        saveSelectedSourceItemsToUser(req, res) {
            let userId = req.session.passport.user;
            console.log(userId);
            let selectedSourceItems = req.body.selectedMedia;
            console.log(selectedSourceItems);

            data.updateUserWithSelectedMedia(userId, selectedSourceItems)
                .then(articles => {
                    res.status(200).render("../views/articles/simple-article-list", {
                        result: articles,
                        user: req.user
                    });
                })
                .catch(err => {
                    res.send("cannot save selected media");
                });
        },
    }
}