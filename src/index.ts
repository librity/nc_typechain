import './primitives_demo';
import './interface_demo';
import './class_demo';

import Block from './Block';
import BlockChain from './BlockChain';

const genesisBlock: Block = new Block(
  0,
  '349031023902131011',
  '',
  "FIRST",
  0,
);

const blockChain = new BlockChain(genesisBlock);

console.log('=== Block chain ===');
console.log(blockChain);
console.log(blockChain.getChain());
console.log(blockChain.blockCount());
console.log(blockChain.lastBlock());
