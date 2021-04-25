import Block from './Block';

export default class BlockChain {
  private chain: Block[];

  constructor() {
    this.chain = [Block.buildGenesis()];
  }

  getChain = (): Block[] => this.chain;
  blockCount = (): number => this.chain.length;
  lastBlock = (): Block => this.chain[this.chain.length - 1];

  private nextBlock = (data: string): Block => {
    const previous: Block = this.lastBlock();

    return previous.buildNext(data);
  };

  private saveNext = (next: Block) => {
    this.chain.push(next);
  };

  createNext = (data: string) => {
    const next = this.nextBlock(data);
    this.saveNext(next);
  };
}
