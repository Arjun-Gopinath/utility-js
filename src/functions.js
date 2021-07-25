const functions = {

    // Print head of the array
    head: function (arr) {
        if (arr.length == 0) {
            return null;
        }
        else {
            return arr[0];
        }
    },

    // Print tail of the array
    tail: function (arr) {
        if (arr.length == 0) {
            return [];
        }
        else {
            arr.shift();
            return arr;
        }
    },

    // Calculate minimum value from the list
    minimum: function (arr) {
        if (arr.length == 0) {
            return null;
        }
        else {
            arr.sort();
            return arr[0];
        }
    },

    // Calculate maximum value from the list
    maximum: function (arr) {
        if (arr.length == 0) {
            return null;
        }
        else {
            arr.sort();
            arr.reverse();
            return arr[0];
        }
    },
}

module.exports = functions;