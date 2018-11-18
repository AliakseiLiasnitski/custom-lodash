const keys = require('./keys');
const assign = require('./assign');
const forEach = require('../ArrayMethods/forEach');

function margeProp(basicObj, obj, arrKeys, index = 0) {
    if (index === 0 && index < arrKeys.length && basicObj[arrKeys[0]] === undefined) {
        assign(basicObj, obj);
    } else if (arrKeys.length === index) {
        return;
    } else {
        if (typeof obj[arrKeys[index]] === 'object') {
            basicObj[arrKeys[index]] = basicObj[arrKeys[index]];
            const temp = basicObj[arrKeys[index]];
            const arrProp = keys(obj[arrKeys[index]]);
            margeProp(temp, obj[arrKeys[index]], arrProp);
        } else {
            basicObj[arrKeys[index]] = obj[arrKeys[index]];
        }
        margeProp(basicObj, obj, arrKeys, index + 1);
    }
}

function merge(object, ...arg) {
    forEach(arg, (item) => {
        if (object !== item) {
            const arrProp = keys(item);
            margeProp(object, item, arrProp);
        }
    })
    return object;
}

module.exports = merge;