const functions = {

    // Print head of the array
    head: function (l1) {
        if (l1.length == 0) {
            return null;
        }
        else {
            return l1[0];
        }
    },

    // Print tail of the array
    tail: function (l1) {
        if (l1.length == 0) {
            return [];
        }
        else {
            l1.shift();
            return l1;
        }
    },

    // Calculate minimum value from the list
    minimum: function (l1) {
        if (l1.length == 0) {
            return null;
        }
        else {
            l1.sort();
            return l1[0];
        }
    },

    // Calculate maximum value from the list
    maximum: function (l1) {
        if (l1.length == 0) {
            return null;
        }
        else {
            l1.sort();
            l1.reverse();
            return l1[0];
        }
    },
}

module.exports = functions;