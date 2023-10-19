import { describe, test, expect } from "@jest/globals";
import Blockchain from "../src/lib/blockchain";
import Block from "../src/lib/block";

describe("Block tests", () => {
  test("Should has genisis block", () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  });

  test("Should be valid blockchain (Genesis)", () => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid()).toEqual(true);
  });

  test("Should be valid blockchain (Two Blocks)", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"));
    expect(blockchain.isValid()).toEqual(true);
  });

  test("Should NOT be valid blockchain", () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"));
    blockchain.blocks[1].data = "Dados alterados";
    expect(blockchain.isValid()).toEqual(false);
  });

  test("Should add block", () => {
    const blockchain = new Blockchain();
    const newBlock = blockchain.addBlock(
      new Block(1, blockchain.blocks[0].hash, "Block 2")
    );
    expect(newBlock).toEqual(true);
  });

  test("Should NOT add block", () => {
    const blockchain = new Blockchain();
    const newBlock = blockchain.addBlock(
      new Block(1, "blockchain.blocks[0].hash", "Block 2")
    );
    expect(newBlock).toEqual(false);
  });
});
