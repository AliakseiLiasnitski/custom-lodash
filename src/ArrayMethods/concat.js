const forEach = require('./forEach');

function concat(arr, ...arg) {
    forEach(arg, (item) => {
        (Array.isArray(item))
            ? arr.push(...item)
            : arr.push(item);
    });
    return arr;
}

module.exports = concat;