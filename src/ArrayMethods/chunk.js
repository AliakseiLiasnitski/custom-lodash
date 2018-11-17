const chunk = (arr, n = 1) => {
    if (Number.isInteger(n)) {
        const masResChunk = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % n === 0) {
                masResChunk.push([arr[i]]);
            } else {
                masResChunk[Math.trunc(i / n)].push(arr[i]);
            }
        }
        return masResChunk;
    }
}

module.exports = chunk;