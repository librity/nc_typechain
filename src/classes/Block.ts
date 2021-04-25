import * as CryptoJS from 'crypto-js';

export default class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  private static genesisSecret = CryptoJS.SHA256('YOUR SECRET HERE').toString();

  static newTimestamp = (): number => Math.round(new Date().getTime() / 1000);

  static buildGenesis = (): Block => {
    const index = 0;
    const previousHash = Block.genesisSecret;
    const data = '';
    const timestamp = Block.newTimestamp();
    const hash = Block.calculateBlockHash(index, previousHash, timestamp, data);

    const genesis = new Block(index, hash, previousHash, data, timestamp);
    return genesis;
  };

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string,
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  private constructor(
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

  buildNext = (data: string): Block => {
    const nextIndex: number = this.index + 1;
    const nextTimestamp: number = Block.newTimestamp();
    const nextHash: string = Block.calculateBlockHash(
      nextIndex,
      this.hash,
      nextTimestamp,
      data,
    );

    const nextBlock = new Block(
      nextIndex,
      nextHash,
      this.hash,
      data,
      nextTimestamp,
    );
    return nextBlock;
  };
}
