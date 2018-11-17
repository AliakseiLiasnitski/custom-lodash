const arrayMethods = require('./src/ArrayMethods/index');
const utilMethods = require('./src/UtilMethods/index');
const objectMethods = require('./src/ObjectMethods/index');

const assign = require('./src/ObjectMethods/assign');
const _ = assign({}, arrayMethods, utilMethods, objectMethods);

console.log(_.map([1, 2, 3], (i) => i + 4));

module.exports = _;