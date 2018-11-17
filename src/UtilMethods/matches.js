const matches = (source) => (object) => {
    for (let property in source) {
        if (object[property] !== source[property]) {
            return false;
        }
    }
    return true;
}

module.exports = matches;