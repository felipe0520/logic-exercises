"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("testing sumNumberArray", () => {
    test("testing where valid response", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = src_1.sumNumberArray(nums, target);
        console.log(result);
        expect(result).toEqual([0, 1]);
    });
    test("testing where valid response and  not a successive number", () => {
        const nums = [4, 5, 10, 12, 21];
        const target = 17;
        const result = src_1.sumNumberArray(nums, target);
        expect(result).toEqual([1, 3]);
    });
});
