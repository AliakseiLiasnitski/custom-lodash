function omitBy(collection, cb) {
    const objResOmitBy = {};
    for (let key in collection) {
        if (!cb(collection[key])) {
            objResOmitBy[key] = collection[key];
        }
    }
    return objResOmitBy;
}

module.exports = omitBy;