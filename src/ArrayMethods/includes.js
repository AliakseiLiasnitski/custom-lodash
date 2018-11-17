const includes = (collection, val, index = 0) => {
    if (typeof collection === 'string') {
        let indexStart = (index < 0) ? collection.length + index : index;
        const str = collection.substring(indexStart);
        return (str.indexOf(val) === -1) ? false : true;
    } else if (!Array.isArray(collection)) {
        collection = Object.values(collection);
    }
    let indexStart = (index < 0) ? collection.length + index : index;
    for (; indexStart < collection.length; indexStart++) {
        if (collection[indexStart] === val) {
            return true;
        }
    }
    return false;
}

module.exports = includes;