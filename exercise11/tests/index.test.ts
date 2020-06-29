// import { completArray } from "../src";

// describe("testing completeArray", () => {
//   test("testing where array is empty", () => {
//     const arrayTest: number[] = [];
//     const testCompleteArray = completArray(arrayTest);

//     expect(testCompleteArray).toEqual([]);
//   });
//   test("testing where array is number sequency order", () => {
//     const arrayTest: number[] = [101, 102, 103, 104];
//     const testCompleteArray = completArray(arrayTest);
//     const response = [101, 102, 103, 104];

//     expect(testCompleteArray).toEqual(response);
//   }),
//     test("testing where array is number not sequency order", () => {
//       const arrayTest: number[] = [103, 104, 101, 102];
//       const testCompleteArray = completArray(arrayTest);
//       const response = [101, 102, 103, 104];

//       expect(testCompleteArray).toEqual(response);
//     }),
//     test("testing where array is number not sequency order and incomplet", () => {
//       const arrayTest: number[] = [10, 20, 17, 22];
//       const testCompleteArray = completArray(arrayTest);
//       const response = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

//       expect(testCompleteArray).toEqual(response);
//     });
// });
