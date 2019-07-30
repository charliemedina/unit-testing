// import { ENETUNREACH } from "constants";

// describe('Add', () => {
//   test('should return 0 when adding 0 to 0', () => {
//     expect(0 + 0).toBe(0);
//   });
//   test('should return 1 when adding 0 to 1', () => {
//     expect(0 + 1).toBe(1);
//   });
//   test('should return 1 when adding 1 to 0', () => {
//     expect(1 + 0).toBe(1);
//   });
//   test('should return 2 when adding 1 to 1', () => {
//     expect(1 + 1).toBe(2);
//   });
// });

// describe('Add using each', () => {
//   each([
//     [0 ,0 ,0],
//     [1 ,0 ,1],
//     [1 ,1 ,0],
//     [1 ,1 ,2],
//   ]).test('should return %s when adding %s to %s', (expected, a, b) => {
//     expect(a + b).toBe(expected);
//   });
// });

// describe('Show Add detail using each', () => {
//   each`
//     expected | a    | b 
//     ${0}     | ${0} | ${0}
//     ${1}     | ${0} | ${1}
//     ${1}     | ${1} | ${0}
//     ${2}     | ${1} | ${1}`
//     .test('should return %s when adding %s to %s', (expected, a, b) => {
//     expect(a + b).toBe(expected);
//   });
// });
