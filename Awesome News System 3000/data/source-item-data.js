/* globals require */

module.exports = function(models) {
    let SourceItem = models.sourceItem;

    return {
        getAllItems() {
            return new Promise((resolve, reject) => {
                SourceItem.find((err, items) => {
                    if (err) {
                        return reject(err);
                    }

                    let ids = [];

                    items.forEach(item => {
                        ids.push(item.id);
                    })

                    return resolve(ids);
                });
            });
        }
    }
}