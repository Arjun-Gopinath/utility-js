const filter = (arr, func) => {
    if (arr.length == 0) return arr;
    return arr.filter(func);
}

module.exports = filter;