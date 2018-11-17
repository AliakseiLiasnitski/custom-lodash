const drop = (arr, n = 1) => {
    if (Number.isInteger(n)) {
        const masResDrop = [];
        for (; n < arr.length; n++) {
            masResDrop.push(arr[n]);
        }
        return masResDrop;
    }
}

module.exports = drop;