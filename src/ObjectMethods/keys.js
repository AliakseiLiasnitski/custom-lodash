const keys = (obj) => {
    const copy = JSON.parse(JSON.stringify(obj))
    const masResKeys = [];
    for (let key in copy) {
        masResKeys.push(key);
    }
    return masResKeys;
}

module.exports = keys;