const keys = require('./keys');
const forEach = require('../ArrayMethods/forEach');

function toPairs(obj) {
    const arrResToPairs = [];
    const arrProperty = keys(obj);
    forEach(arrProperty, (item) => {
        arrResToPairs.push([item, obj[item]]);
    });
    return arrResToPairs;
}

module.exports = toPairs;