const SHA256 = require("crypto-js/sha256");
class TaylaoBlock {
    constructor(data, datetime, index,  previousHash = " ") {
    this.data = data;
    this.datetime = datetime;
    this.index = index;
    this.previousHash = previousHash;
    this.hash = this.calcHash();
    this.nonce = 0;
  }

  calcHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.datetime +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  evidenceOfJob(level) {
    while (
      this.hash.substring(0, level) !== Array(level + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calcHash();
    }
  }
}

class TaylaoBlockchain {
  constructor() {
    this.blockchain = [this.StartCycle()];
    this.level = 4;
  }
  StartCycle() {
    return new TaylaoBlock(0, "2021", "block InitialBlock in the Chain", "0");
  }

  getLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    //newBlock.hash = newBlock.calcHash();
    newBlock.evidenceOfJob(this.level);
    this.blockchain.push(newBlock);
  }

checkChainIntegrity() {
    for (let i = 1; i < this.blockchain.length; i++) {
        const currentBlock = this.blockchain[i];
        const previousBlock = this.blockchain[i - 1];

        if (currentBlock.hash !== currentBlock.calcHash()) {
            return false;
        }

        if (currentBlock.previousHash !== previousBlock.hash) {
            return false;
        }
    }
    return true;
}

let doingCoin = new TaylaoBlockchain();

console.log("doingCoin exploring in progress....");
doingCoin.addNewBlock(
  new TaylaoBlock(1, "data atual", {
    sender: "Joao doido",
    recipient: "Biricuticu",
    quantity: 90
  })
);

doingCoin.addNewBlock(
  new TaylaoBlock(2, "data", {
    sender: "Tiozao do churras",
    recipient: "muleque doido",
    quantity: 100
  })
);

console.log(JSON.stringify(doingCoin, null, 5));
