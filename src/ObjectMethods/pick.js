const map = require('../ArrayMethods/map');
const concat = require('../ArrayMethods/concat');
const property = require('../UtilMethods/property');

const addProp = (path, value) => {
    if (path.length === 1) {
        return value;
    }

    const obj = {};
    let temp = obj;
    for (let i = 1; i < path.length; i++) {
        if (i !== path.length - 1) {
            temp[path[i]] = {};
            temp = temp[path[i]];
        } else {
            temp[path[i]] = value;
        }
    }
    return obj;
}

const pick = (obj, ...arg) => {
    const objResPick = {}
    const masArg = map(concat([], ...arg), (item) => item.split('.'));
    for (let i = 0; i < masArg.length; i++) {
        const valueProp = property(masArg[i])(obj);
        if (valueProp !== undefined) {
            objResPick[masArg[i][0]] = addProp(masArg[i], valueProp);
        }
    }
    return objResPick;
}

module.exports = pick;