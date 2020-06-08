"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("../exercise1");
describe("testing exercise1", () => {
    test("Should return sum = 10 ", () => {
        const array = [2, 5];
        const response = exercise1_1.sumNumber(array);
        expect(response).toBe(10);
    });
});
