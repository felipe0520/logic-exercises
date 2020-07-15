import { verifyAnagram } from "../src";

describe("testing verifyAnagram", () => {
  test("testing where is valid anagram", () => {
    const s: string = "banana";
    const t: string = "ananab";
    const result = verifyAnagram(s, t);
    expect(result).toEqual(true);
  });
  test("testing where is invalid anagram", () => {
    const s: string = "banana";
    const t: string = "anayab";
    const result = verifyAnagram(s, t);
    expect(result).toEqual(false);
  });
});
