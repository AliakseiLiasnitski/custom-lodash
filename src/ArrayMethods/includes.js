const values = require('../ObjectMethods/values');

function includes(collection, val, index = 0) {
    let indexStart = (index < 0) ? collection.length + index : index;

    if (typeof collection === 'string') {
        const str = collection.substring(indexStart);
        return (str.indexOf(val) === -1) ? false : true;
    } else if (!Array.isArray(collection)) {
        collection = values(collection);
    }

    for (; indexStart < collection.length; indexStart++) {
        if (collection[indexStart] === val) {
            return true;
        }
    }
    return false;
}

module.exports = includes;