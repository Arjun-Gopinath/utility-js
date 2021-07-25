const map = require('./map');

describe('Map', () => {
    test('Map of [1, 2, 3] to cube is [1, 8, 27]', () => {
        expect(map([1, 2, 3], x => Math.pow(x, 3))).toEqual([1, 8, 27]);
    });
    test('Map of [1, 2, 3] to identity is [1, 2, 3]', () => {
        expect(map([1, 2, 3], x => x)).toEqual([1, 2, 3]);
    });
    test('Map of [] to identity is []', () => {
        expect(map([], x => Math.pow(x, 3))).toEqual([]);
    });
});