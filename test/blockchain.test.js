const Blockchain = require('../src/blockchain');
const Block = require('../src/block');

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    test('starts with genesis block', () => {
        expect(blockchain.chain.length).toEqual(1);
    });

    test('adds a new block correctly', () => {
        blockchain.addBlock(new Block(1, '2021-01-02', { amount: 100 }));
        expect(blockchain.chain.length).toEqual(2);
    });

    test('validates a valid chain', () => {
        blockchain.addBlock(new Block(1, '2021-01-02', { amount: 100 }));
        expect(blockchain.isChainValid()).toBe(true);
    });

    test('invalidates a chain with a corrupt block', () => {
        blockchain.addBlock(new Block(1, '2021-01-02', { amount: 100 }));
        blockchain.chain[1].data.amount = 200; // Corrupting the data
        expect(blockchain.isChainValid()).toBe(false);
    });
});
