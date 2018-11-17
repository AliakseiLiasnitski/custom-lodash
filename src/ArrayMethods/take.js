const take = (arr, n = 1) => {
    const masResTake = [];
    if (n > arr.length) {
        n = arr.length;
    }
    for (let i = 0; i < n; i++) {
        masResTake.push(arr[i]);
    }
    return masResTake;
}

module.exports = take;