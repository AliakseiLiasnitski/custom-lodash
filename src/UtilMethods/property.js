const property = (path) => (object) => {
    if (typeof path === 'string') {
        path = path.split('.');
    }
    for (let i = 0; i < path.length; i++) {
        if (path[i] in object) {
            object = object[path[i]];
        } else {
            return undefined;
        }
    }
    return object;
}

module.exports = property;