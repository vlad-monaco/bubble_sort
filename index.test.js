const {bubbleSort} = require('./index');

describe('Bubble sort for array', () => {
    Array.prototype.bubbleSort = bubbleSort;
    /**
     * Можно отсортировать числовой массив
     */
    test('Method should sort', () => {
        let arr = [5, 3, 2, 1, 4];

        arr.bubbleSort((a, b) => a > b);

        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    test('Method should sort down', () => {
        let arr = [1, 2, 3, 4, 5];

        arr.bubbleSort((a, b) => a < b);

        expect(arr).toEqual([5, 4, 3, 2, 1]);
    });

    /**
     * Можно отсортировать массив из элементов типа String
     */
    test('Should return sorted array with string ', () => {
        let arr = ['манго', 'папайя', 'апельсин', 'вишня', 'арбуз'];

        arr.bubbleSort((a, b) => a > b);

        expect(arr).toEqual(['апельсин', 'арбуз', 'вишня', 'манго', 'папайя']);
    });

    test('Should return sorted array by string length', () => {
        let arr = ['манго', 'папайя', 'апельсин', 'вишня', 'арбуз'];

        arr.bubbleSort((a, b) => a.length > b.length);

        expect(arr).toEqual(['манго', 'вишня', 'арбуз', 'папайя', 'апельсин']);
    });

    /**
     * Можно отсортировать массив из элементов типа Object
     */
    test('Should return sorted array with object', () => {
        let arr = [
            {name: 'Joe', budget: 25000},
            {name: 'Mario', budget: 21000},
            {name: 'Chris', budget: 15000}
        ];

        arr.bubbleSort((a, b) => a.budget > b.budget);

        expect(arr).toEqual([
            {name: 'Chris', budget: 15000},
            {name: 'Mario', budget: 21000},
            {name: 'Joe', budget: 25000}
        ]);
    });

    /**
     * При передаче в первый параметр(callback) аргумент не типа функции, возвращается ошибка
     */
    test('Method should return TypeError', () => {
        let arr = [5, 4, 3, 2, 1];

        expect(() => arr.bubbleSort(123)).toThrow(TypeError);
    });

    /**
     * Если this не равен экземпляру класса Array, возвращается ошибка(при использовании 'use strict')
     */
    test('Should return TypeError', () => {
        function toError() {
            Array.prototype.bubbleSort.call(null, () => {
            });
        };

        expect(toError).toThrow(TypeError);

    });

    test('Should throw with plain object', () => {
        function toError() {
            Array.prototype.bubbleSort.call(null, () => {});
        };

        expect(toError).toThrow(TypeError);

    });

    /**
     * Можно работать с контекстом
     */
    test('Should return sorted array', () => {
        const arr = [3, 2, 1, 6, 5, 4];

        arr.bubbleSort(function (a, b) {
            return a > this.border ? a > b : false;
        }, {border: 3});

        expect(arr).toEqual([3, 2, 1, 4, 5, 6]);
    });
});





















