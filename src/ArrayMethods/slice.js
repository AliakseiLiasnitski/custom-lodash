function slice(arr, start, and = arr.length) {
    const arrResSlice = [];
    if (start < 0) {
        start = arr.length + start;
    }
    for (; start < and; start++) {
        arrResSlice.push(arr[start]);
    }
    return arrResSlice;
}

module.exports = slice;