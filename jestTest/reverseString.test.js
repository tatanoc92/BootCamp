const reverseString = require('./reverseString');

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});