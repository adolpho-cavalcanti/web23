import { describe, test, expect } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block tests", () => {
  test("Should be valid", () => {
    const block = new Block(1, "abc");
    const valid = block.isValid();
    expect(valid).toBeTruthy();
  });

  test("Should NOT be valid HASH", () => {
    const block = new Block(1, "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid INDEX", () => {
    const block = new Block(-1, "abc");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });
});
