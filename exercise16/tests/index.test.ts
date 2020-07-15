import { verifyNumberDuplicad } from "../src";

describe("testing completeArray", () => {
  test("testing where is valid array", () => {
    const arrayTest: number[] = [1, 2, 3, 4, 5, 5, 2, 1, 3];
    const testVerifyNumberDuplicad = verifyNumberDuplicad(arrayTest);

    expect(testVerifyNumberDuplicad).toEqual(4);
  });
  test("testing where is invalid array", () => {
    const arrayTest: number[] = [1, 2, 3, 4, 5, 5, 2, 1, 3, 4];
    const testVerifyNumberDuplicad = verifyNumberDuplicad(arrayTest);

    expect(testVerifyNumberDuplicad).toEqual(false);
  });
});
