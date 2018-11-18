const arrayMethods = require('./src/ArrayMethods/index');
const utilMethods = require('./src/UtilMethods/index');
const objectMethods = require('./src/ObjectMethods/index');

const assign = require('./src/ObjectMethods/assign');
const _ = assign({}, arrayMethods, utilMethods, objectMethods);

module.exports = _;