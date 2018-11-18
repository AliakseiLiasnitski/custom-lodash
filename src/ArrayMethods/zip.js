const forEach = require('./forEach');

function zip(...arg) {
    const arrResZip = [];
    let maxLengthElem = 0;
    forEach(arg, (item) => {
        if (maxLengthElem < item.length) {
            maxLengthElem = item.length;
        }
    })
    for (let i = 0; i < maxLengthElem; i++) {
        arrResZip.push([]);
        forEach(arg, (item) => {
            arrResZip[i].push(item[i]);
        });
    }
    return arrResZip;
}

module.exports = zip;