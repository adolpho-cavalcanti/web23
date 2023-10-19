import { describe, test, expect } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block tests", () => {
  test("Should be valid", () => {
    const block = new Block(1, "abc", "Genisis Block");
    const valid = block.isValid();
    expect(valid).toBeTruthy();
  });

  test("Should NOT be valid (Previous HASH)", () => {
    const block = new Block(1, "", "Block 2");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (HASH)", () => {
    const block = new Block(1, "abc", "Block 2");
    block.hash = "";
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (data)", () => {
    const block = new Block(1, "abc", "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (Timestamp)", () => {
    const block = new Block(1, "abc", "Block 2");
    block.timestamp = -1;
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (INDEX)", () => {
    const block = new Block(-1, "abc", "Block 2");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });
});
