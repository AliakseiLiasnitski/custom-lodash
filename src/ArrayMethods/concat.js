const concat = (arr, ...arg) => {
    for (let i = 0; i < arg.length; i++) {
        (Array.isArray(arg[i]))
            ? arr.push(...arg[i])
            : arr.push(arg[i]);
    }
    return arr;
}

module.exports = concat;