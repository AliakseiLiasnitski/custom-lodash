const forEach = require('./forEach');
const slice = require('./slice');

function drop(arr, n = 1) {
    if (Number.isInteger(n)) {
        const arrResDrop = [];
        forEach(slice(arr, n), (item) => {
            arrResDrop.push(item);
        })
        return arrResDrop;
    }
}

module.exports = drop;