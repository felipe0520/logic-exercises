"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("testing completeArray", () => {
    test("testing where array is empty", () => {
        const arrayTest = [];
        const testCompleteArray = src_1.completArray(arrayTest);
        expect(testCompleteArray).toEqual([]);
    });
    test("testing where array is number sequency order", () => {
        const arrayTest = [101, 102, 103, 104];
        const testCompleteArray = src_1.completArray(arrayTest);
        expect(testCompleteArray).toEqual([101, 102, 103, 104]);
    }),
        test("testing where array is number not sequency order", () => {
            const arrayTest = [103, 104, 101, 102];
            const testCompleteArray = src_1.completArray(arrayTest);
            expect(testCompleteArray).toEqual([101, 102, 103, 104]);
        }),
        test("testing where array is number not sequency order and incomplet", () => {
            const arrayTest = [10, 20, 17, 22];
            const testCompleteArray = src_1.completArray(arrayTest);
            expect(testCompleteArray).toEqual([
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
            ]);
        });
});
