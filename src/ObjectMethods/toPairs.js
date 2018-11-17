const keys = require('./keys');

const toPairs = (obj) => {
    const masResToPairs = [];
    const masProperty = keys(obj);
    for (let i = 0; i < masProperty.length; i++) {
        masResToPairs.push([masProperty[i], obj[masProperty[i]]]);
    }
    return masResToPairs;
}

module.exports = toPairs;