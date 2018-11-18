const matches = require('../UtilMethods/matches');
const matchesProperty = require('../UtilMethods/matchesProperty');
const property = require('../UtilMethods/property');
const forEach = require('./forEach');

function filter(objects, predicate) {
    const arrResFilter = [];
    if (Array.isArray(predicate)) {
        predicate = matchesProperty(predicate[0], predicate[1]);
    } else if (typeof predicate === 'object') {
        predicate = matches(predicate);
    } else if (typeof predicate === 'string') {
        predicate = property(predicate);
    }
    forEach(objects, (item) => {
        if (!!predicate(item)) {
            arrResFilter.push(item);
        }
    });
    return arrResFilter;
}

module.exports = filter;