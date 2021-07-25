const functions = require('./functions')

// Head function
describe('Head', () => {
    test('List is empty', () => {
        expect(functions.head([])).toBeNull();
    });
    test('Show head of the array', () => {
        expect(functions.head([5, 3, 4])).toBe(5);
    });
}),

    // Tail function
    describe('Tail', () => {
        test('List is empty', () => {
            expect(functions.tail([])).toEqual([]);
        });
        test('Show head of the array', () => {
            expect(functions.tail([5, 3, 4])).toEqual([3, 4]);
        });
    }),

    // Miinimum function
    describe('Minimum', () => {
        test('List is empty', () => {
            expect(functions.minimum([])).toBeNull();
        });
        test('Show minimum value', () => {
            expect(functions.minimum([7, 5, 3, 4])).toBe(3);
        });
    }),

    // Maximum function
    describe('Maximum', () => {
        test('List is empty', () => {
            expect(functions.maximum([])).toBeNull();
        });
        test('Show maximum value', () => {
            expect(functions.maximum([7, 5, 3, 4])).toBe(7);
        });
    })