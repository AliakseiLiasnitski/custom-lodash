const zip = (...arg) => {
    const masResZip = [];
    let maxLengthElem = arg[0].length;
    for (let i = 1; i < arg.length; i++) {
        if (maxLengthElem < arg[i].length) {
            maxLengthElem = arg[i].length;
        }
    }
    for (let i = 0; i < maxLengthElem; i++) {
        masResZip.push([]);
        for (let j = 0; j < arg.length; j++) {
            masResZip[i].push(arg[j][i]);
        }
    }
    return masResZip;
}

module.exports = zip;