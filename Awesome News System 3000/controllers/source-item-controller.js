/* globals require module */

const passport = require("passport");

module.exports = function (data) {
    return {
        getAllSources(req, res) {

            data.getAllSourceItems()
                .then(sourceItems => {
                    if (req.isAuthenticated()) {
                        res.render("../views/sources/select-media", {
                            result: sourceItems
                        });
                    }
                    else {
                        res.render("../views/sources/sources-list", {
                            result: sourceItems
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
            let selectedSourceItems = req.body.selectedMedia;
  
           data.updateUserWithSelectedMedia(userId, selectedSourceItems)
           .then((result) => {
               res.status(200).render("../views/articles/simple-article-list");
           })
           .catch(err => {
                    res.send("cannot save selected media");
                });          
        },
    }
}