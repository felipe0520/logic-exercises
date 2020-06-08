import { sumNumber } from "../exercise1";

describe("testing exercise1", () => {
  test("Should return sum = 10 ", () => {
    const array = [2, 5];
    const response = sumNumber(array);
    expect(response).toBe(10);
  });
});
