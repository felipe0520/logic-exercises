import { transcriptionRna } from "../src/index";

test("testing dna", () => {
  const dnaTest = "ATTGCTGCGCATTAACGACGCGTA";

  const response = transcriptionRna(dnaTest);

  expect(response).toBe("UAACGACGCGUAAUUGCUGCGCAU");
});

test("testing dna", () => {
  const dnaTest = "ATT GCT GCG CAT TAA CGA CGC GTA";

  const response = transcriptionRna(dnaTest);

  expect(response).toBe("UAA CGA CGC GUA AUU GCU GCG CAU");
});
