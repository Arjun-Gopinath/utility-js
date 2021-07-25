
const reduce = require('./reduce');

describe('Reduce', () => {
    // Empty array with default value = undefined
    test('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect(reduce([], (x, y) => x + y)).toEqual(undefined);
    });

    // Empty array with a default value 
    test('reduce([],(x,y)=>x+y, 10) should be 10', () => {
        expect(reduce([], (x, y) => x + y, 10)).toEqual(10);
    });

    // Array with default value = undefined
    test('reduce([\'a\', \'b\', \'c\'],(x,y)=>x+y) should be abc', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y)).toEqual('abc');
    });

    // Array with a default value
    test('reduce([\'a\', \'b\', \'c\'],(x,y)=>x+y, \'z\') should be zabc', () => {
        expect(reduce(['a', 'b', 'c'], (x, y) => x + y, 'z')).toEqual('zabc');
    });
});