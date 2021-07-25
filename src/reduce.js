const reduce = (arr, reducer, defaultValue = undefined) => {
    if (arr.length == 0) return defaultValue;

    const reducedValue = arr.reduce(reducer);
    if (defaultValue) {
        return defaultValue + reducedValue;
    } else {
        return reducedValue;
    }
}

module.exports = reduce;