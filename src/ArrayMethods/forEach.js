function forEach(arr, cb) {
    let index = 0;
    const length = (arr == null) ? 0 : arr.length;
    while (index < length) {
        cb(arr[index], index, arr);
        index++;
    }
    return arr;
}

module.exports = forEach;