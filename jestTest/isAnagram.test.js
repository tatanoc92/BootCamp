const isAnagram = require('./isAnagram');

describe('isAnagram', () => {
    test('is abc an anagram to cab?', () => {
        expect(isAnagram('abc', 'cab')).toBe(true);
    })
});