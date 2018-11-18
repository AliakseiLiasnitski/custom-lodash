const matches = require('../UtilMethods/matches');
const matchesProperty = require('../UtilMethods/matchesProperty');
const property = require('../UtilMethods/property');

function find(objects, predicate) {
    if (Array.isArray(predicate)) {
        predicate = matchesProperty(predicate[0], predicate[1]);
    } else if (typeof predicate === 'object') {
        predicate = matches(predicate);
    } else if (typeof predicate === 'string') {
        predicate = property(predicate);
    }
    for (let i = 0; i < objects.length; i++) {
        if (predicate(objects[i])) {
            return objects[i];
        }
    }
    return undefined;
}

module.exports = find;