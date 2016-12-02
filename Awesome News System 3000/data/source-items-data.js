/* globals module Promise*/

module.exports = function (models) {
    const SourceItem = models.sourceItem;

    return {
        getAllSourceItems() {
            return new Promise((resolve, reject) => {
                SourceItem.find((err, sourceItems) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(sourceItems);
                });
            });
        },
        getSourceById(id) {
            return new Promise((resolve, reject) => {
                SourceItem.findOne({ id: id }, (err, sourceItem) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(sourceItem);
                });
            });
        },
        getSourceByName(name) {
            return new Promise((resolve, reject) => {
                SourceItem.findOne({ name: name }, (err, sourceItem) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(sourceItem);
                });
            });
        }
    }
}