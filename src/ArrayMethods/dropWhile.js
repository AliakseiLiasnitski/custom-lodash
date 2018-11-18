const matches = require('../UtilMethods/matches');
const matchesProperty = require('../UtilMethods/matchesProperty');
const property = require('../UtilMethods/property');
const drop = require('./drop');

function dropWhile(objects, predicate) {
    let index = 0;
    if (Array.isArray(predicate)) {
        predicate = matchesProperty(predicate[0], predicate[1]);
    } else if (typeof predicate === 'object') {
        predicate = matches(predicate);
    } else if (typeof predicate === 'string') {
        predicate = property(predicate);
    }

    while (objects.length > index && predicate(objects[index])) {
        index++;
    }
    return drop(objects, index);
}

module.exports = dropWhile;