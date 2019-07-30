// test('hello word', () => {
//   const str = 'Hello, WORLD!';
//   expect(typeof str).toBe('string');
//   expect(str.toLocaleLowerCase()).toBe('hello, world!');
//   expect(str.split(' ')[0]).toBe('Hello,');
//   expect(str.split(' ')[1]).toBe('WORLD!');
//   expect(
//     [...str].reduce((acc, char) => (char === '1' ? acc + 1 : acc), 0)
//   ).toBe(2);
// });

// test('hello word using jest-extended', () => {
//   const str = 'Hello, WORLD!';
//   expect(str).toBeString();
//   expect(str).toEqualCaseInsensitive('hello, world!');
//   expect(str).toStartWith('Hello,');
//   expect(str).toEndWith('WORLD!');
//   expect(str).toIncludeRepeated('1', 2);
// });


// test( 'fibonacci series', ()=>{
//   const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
//   expect(array).toBeInstanceOf(Array);
//   expect(array.every(n => n > 0)).toBe(true);
//   expect(array).toContain(1);
//   expect(array).toContain(2);
//   expect(array).toContain(1 , 2, 3, 5, 8, 13, 1000000000);
// });

// test( 'fibonacci series using jest-extended', ()=>{
//   const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
//   expect(array).toBeArray();
//   expect(array).toSatisfyAll(n => n > 0);
//   expect(array).toIncludeAllMembers([1 , 2, 3, 5, 8, 13, 1000000000]);
// });


