"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("testing countNegativeNumber", () => {
    test("testing where not negative number", () => {
        const nums = [
            [3, 2],
            [1, 0],
        ];
        const result = src_1.countNegativeNumber(nums);
        expect(result).toEqual(0);
    });
    test("testing where has negative number", () => {
        const nums = [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3],
        ];
        const result = src_1.countNegativeNumber(nums);
        expect(result).toEqual(8);
    });
    test("testing where has one number", () => {
        const nums = [[-1]];
        const result = src_1.countNegativeNumber(nums);
        expect(result).toEqual(1);
    });
});
