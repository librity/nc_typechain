import './demos/primitives';
import './demos/interface';
import './demos/class';

import BlockChain from './classes/BlockChain';

const blockChain = new BlockChain();

console.log('=== Block chain ===');
console.log(blockChain.getChain());
console.log(blockChain.blockCount());
console.log(blockChain.lastBlock());

blockChain.createNext('Name: John Doe, SSN: 000-00-0000');
console.log(blockChain.lastBlock());

blockChain.createNext(
  'transaction: from Wallet 12u90inoh1ei, 200 USD, to Wallet 3i2091e1njid',
);
console.log(blockChain.lastBlock());
console.log(blockChain.blockCount());
console.log(blockChain.getChain());
