const forEach = require('./forEach');

function chunk(arr, n = 1) {
    if (Number.isInteger(n)) {
        const arrResChunk = [];
        forEach(arr, (item, index) => {
            if (index % n === 0) {
                arrResChunk.push([item]);
            } else {
                arrResChunk[Math.trunc(index / n)].push(item);
            }
        })
        return arrResChunk;
    }
}

module.exports = chunk;