const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions.js');

describe('tests for returnTwo function', () => {
    test('check that function returns 2', () => {
        expect(returnTwo()).toEqual(2);
    })
})

describe('tests for greeting function', () => {
    test('should return string with argument inserted', () => {
        expect(greeting('James')).toContain('James');
        expect(greeting('Jill')).toContain('Jill');
        expect(greeting('King')).toContain('King');
    })
})

describe('tests for mathematical functions', () => {

    test('test for add function should return sum of args', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    })

    test('test for subtract function should return sum of args', () => {
        expect(subtract(5, 3)).toEqual(2);
        expect(subtract(10, 2)).toEqual(8);
    })

    test('test for multiply function should return sum of args', () => {
        expect(multiply(5, 10)).toEqual(50);
        expect(multiply(2, 9)).toEqual(18);
    })

    test('test for divide function should return sum of args', () => {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(10, 5)).toEqual(2);
    })
})