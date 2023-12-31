import { describe, test, expect, beforeAll } from "@jest/globals";
import Block from "../src/lib/block";

describe("Block tests", () => {
  let genesis: Block;

  beforeAll(() => {
    genesis = new Block(0, "", "Genesis Block");
  });

  test("Should be valid", () => {
    const block = new Block(1, genesis.hash, "Block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeTruthy();
  });

  test("Should NOT be valid (Previous HASH)", () => {
    const block = new Block(1, "", "Block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (HASH)", () => {
    const block = new Block(1, "abc", "Block 2");
    block.hash = "";
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (data)", () => {
    const block = new Block(1, genesis.hash, "");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (Timestamp)", () => {
    const block = new Block(1, genesis.hash, "Block 2");
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });

  test("Should NOT be valid (INDEX)", () => {
    const block = new Block(-1, genesis.hash, "Block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid).toBeFalsy();
  });
});
