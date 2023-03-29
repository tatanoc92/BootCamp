const chunkArray = require('./chunk');

describe('chunkArray', () => {
    test('is array chunked well', () => {
        expect(chunkArray([1, 2, 3, 4, 5, 6], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5, 6]
        ]);
    })
})

