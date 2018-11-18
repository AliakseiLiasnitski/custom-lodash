const forEach = require('./forEach');

function compact(arr) {
    const arrResCompact = [];
    forEach(arr, (item) => {
        if (item) {
            arrResCompact.push(item);
        }
    });
    return arrResCompact;
}

module.exports = compact;