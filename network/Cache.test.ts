import Cache from "./Cache";

describe('Cache tests', () => {
    const cache = new Cache<string>();

    test('given empty cache then return is undefined', () => {
        const result = cache.get('key');
        expect(result).toBeUndefined();
    });

    test('given cached content then key returns correct value', () => {
        const valueA = 'abc';
        const valueB = 'def';
        const keyA = 'a';
        const keyB = 'b';
        cache.set(keyA, valueA);
        cache.set(keyB, valueB);
        expect(cache.get(keyA)).toBe(valueA);
        expect(cache.get(keyB)).toBe(valueB);
    });

    test('given overwritten content then key returns correct value', () => {
        const valueA = 'abc';
        const valueB = 'def';
        const keyA = 'a';
        cache.set(keyA, valueA);
        expect(cache.get(keyA)).toBe(valueA);
        cache.set(keyA, valueB);
        expect(cache.get(keyA)).toBe(valueB);
    });

    test('given timeout reached then value is dismissed', () => {
        const cache = new Cache<string>(100);
        const valueA = 'abc';
        const keyA = 'a';
        cache.set(keyA, valueA);
        expect(cache.get(keyA)).toBe(valueA);

        setTimeout(() =>{
            expect(cache.get(keyA)).toBeUndefined();
        }, 110);
    });
});
