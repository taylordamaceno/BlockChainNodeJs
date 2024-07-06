const crypto = require('crypto');
const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, datetime, data, previousHash = ' ') {
        this.index = index;
        this.datetime = datetime;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
        this.signature = '';
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.datetime + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }

    signBlock(privateKey) {
        const sign = crypto.createSign('SHA256');
        sign.update(this.hash).end();
        this.signature = sign.sign(privateKey, 'hex');
    }

    isValidSignature(publicKey) {
        const verify = crypto.createVerify('SHA256');
        verify.update(this.hash);
        return verify.verify(publicKey, this.signature, 'hex');
    }
}

module.exports = Block;