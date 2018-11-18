function keys(obj) {
    const arrResKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrResKeys.push(key);
        }
    }
    return arrResKeys;
}

module.exports = keys;