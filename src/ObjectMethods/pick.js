const map = require('../ArrayMethods/map');
const concat = require('../ArrayMethods/concat');
const property = require('../UtilMethods/property');
const forEach = require('../ArrayMethods/forEach');

function addProp(path, value) {
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

function pick(obj, ...arg) {
    const objResPick = {}
    const masArg = map(concat([], ...arg), (item) => item.split('.'));
    forEach(masArg, (item) => {
        const valueProp = property(item)(obj);
        if (valueProp !== undefined) {
            objResPick[item[0]] = addProp(item, valueProp);
        }
    });
    return objResPick;
}

module.exports = pick;