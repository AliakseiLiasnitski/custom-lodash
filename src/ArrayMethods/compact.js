const compact = (arr) => {
    const masResCompact = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            masResCompact.push(arr[i]);
        }
    }
    return masResCompact;
}

module.exports = compact;