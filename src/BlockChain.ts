import Block from './Block';

export default class BlockChain {
  private chain: Block[];

  constructor(genesisBlock: Block) {
    this.chain = [genesisBlock];
  }

  getChain = (): Block[] => this.chain;
  blockCount = (): number => this.chain.length;
  lastBlock = (): Block => this.chain[this.chain.length - 1];
}
