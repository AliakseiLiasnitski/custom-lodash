function take(arr, n = 1) {
    const arrResTake = [];
    if (n > arr.length) {
        n = arr.length;
    }
    for (let i = 0; i < n; i++) {
        arrResTake.push(arr[i]);
    }
    return arrResTake;
}

module.exports = take;