import './primitives_demo';
import './interface_demo';
import './class_demo';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  '349031023902131011',
  '',
  "I'm the first",
  0,
);

const blockChain: Block[] = [genesisBlock];

console.log('=== Block chain ===');
console.log(blockChain);

// Won't transpile
// blockChain.push("NOT A BLOCK")
console.log(blockChain);
