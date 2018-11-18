const keys = require('./keys');
const forEach = require('../ArrayMethods/forEach');

function assign(obj, ...arg) {
    forEach(arg, (itemArg) => {
        const masProp = keys(itemArg);
        forEach(masProp, (itemProp) => {
            obj[itemProp] = itemArg[itemProp];
        })
    });
    return obj;
}

module.exports = assign;