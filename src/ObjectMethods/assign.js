const keys = require('./keys');

const assign = (obj, ...arg) => {
    const objResAssign = JSON.parse(JSON.stringify(obj));
    for (let i = 0; i < arg.length; i++) {
        const masProp = keys(arg[i]);
        for (let j = 0; j < masProp.length; j++) {
            objResAssign[masProp[j]] = arg[i][masProp[j]];
        }
    }
    return objResAssign;
}

module.exports = assign;