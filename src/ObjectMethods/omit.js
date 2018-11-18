const map = require('../ArrayMethods/map');
const concat = require('../ArrayMethods/concat');
const property = require('../UtilMethods/property');
const assign = require('./assign');

const removeProp = (object, path) => {
    const obj = assign({}, object);

    if (path.length === 1) {
        delete obj[path[0]];
    }

    let temp = obj;
    for (let i = 0; i < path.length; i++) {
        if (i !== path.length - 1) {
            temp = temp[path[i]];
        } else {
            delete temp[path[i]];
        }
    }
    return obj;
}

const omit = (obj, ...arg) => {
    let objResOmit = JSON.parse(JSON.stringify(obj));
    const masArg = map(concat([], ...arg), (item) => item.split('.'));
    for (let i = 0; i < masArg.length; i++) {
        const valueProp = property(masArg[i])(obj);
        if (valueProp !== undefined) {
            objResOmit = removeProp(objResOmit, masArg[i]);
        }
    }
    return objResOmit;
}

module.exports = omit;