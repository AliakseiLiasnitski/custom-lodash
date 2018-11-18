const property = require('../UtilMethods/property');

function map(collection, cb) {
    const arrResMap = [];
    if (typeof cb === 'string') {
        cb = property(cb);
    }
    for (let key in collection) {
        arrResMap.push(cb(collection[key]));
    }
    return arrResMap;
}

module.exports = map;