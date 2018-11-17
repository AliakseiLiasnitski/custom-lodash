const property = require('../UtilMethods/property');

const map = (collection, cb) => {
    const masResMap = [];
    if (typeof cb === 'string') {
        cb = property(cb);
    }
    for (let key in collection) {
        masResMap.push(cb(collection[key]));
    }
    return masResMap;
}

module.exports = map;