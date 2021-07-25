const filter = require('./filter');

describe('Filter', () => {
    // Filter empty array
    test('filter([], x => true) should give []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    // Filter array elements if they are false
    test('filter([1,2,3],x => true) should give [1,2,3]', () => {
        expect(filter([1, 2, 3], x => true)).toEqual([1, 2, 3]);
    });

    // Filter array elements if they are true
    test('filter([1,2,3],x => false) should give []', () => {
        expect(filter([1, 2, 3], x => false)).toEqual([]);
    });

    // Remove all elements < 1
    test('filter([1,2,3],x => x > 1) should give [2,3]', () => {
        expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3]);
    });

    // Remove all Lowercase elements 
    test('filter([\'a\',\'B\',\'c\',\'D\'], filterUpperCase) should be [\'B\',\'D\']', () => {
        expect(filter(['a', 'B', 'c', 'D'], x => x === x.toUpperCase())).toEqual(['B', 'D']);
    });
})