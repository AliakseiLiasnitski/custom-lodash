const property = require('./property');

const matchesProperty = (path, srcValue) => (object) => {
    if (property(path)(object) === srcValue) {
        return true;
    }
    return false;
}

module.exports = matchesProperty;