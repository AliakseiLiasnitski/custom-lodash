const map = require('../ArrayMethods/map');
const concat = require('../ArrayMethods/concat');
const property = require('../UtilMethods/property');
const assign = require('./assign');
const forEach = require('../ArrayMethods/forEach');

function removeProp(object, path) {
    const obj = assign({}, object);

    if (path.length === 1) {
        delete obj[path[0]];
    }

    let temp = obj;
    forEach(path, (item, index) => {
        if (index !== path.length - 1) {
            temp = temp[item];
        } else {
            delete temp[item];
        }
    });
    return obj;
}

function omit(obj, ...arg) {
    let objResOmit = assign({}, obj);
    const arrArg = map(concat([], ...arg), (item) => item.split('.'));
    forEach(arrArg, (item) => {
        const valueProp = property(item)(obj);
        if (valueProp !== undefined) {
            objResOmit = removeProp(objResOmit, item);
        }
    });
    return objResOmit;
}

module.exports = omit;