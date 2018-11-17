const pickBy = (collection, cb) => {
    const objResPickBy = {};
    for (let key in collection) {
        if (cb(collection[key])) {
            objResPickBy[key] = collection[key];
        }
    }
    return objResPickBy;
}

module.exports = pickBy;