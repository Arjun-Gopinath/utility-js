const map = (arr, fun) => {
    if (arr.length == 0) return arr;
    return arr.map(fun);
}

module.exports = map;