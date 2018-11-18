const keys = require('./keys');

const assign = (obj, ...arg) => {
    for (let i = 0; i < arg.length; i++) {
        const masProp = keys(arg[i]);
        for (let j = 0; j < masProp.length; j++) {
            obj[masProp[j]] = arg[i][masProp[j]];
        }
    }
    return obj;
}

module.exports = assign;