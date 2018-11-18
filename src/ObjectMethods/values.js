function values(obj) {
    const arrResValues = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrResValues.push(obj[key]);
        }
    }
    return arrResValues;
}

module.exports = values;