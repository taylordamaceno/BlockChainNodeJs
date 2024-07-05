const Block = require('../src/block');

describe('Block', () => {
    let data, datetime, block;

    beforeEach(() => {
        datetime = new Date('2021-01-01').toISOString();
        data = { amount: 100 };
        block = new Block(0, datetime, data, "0");
    });

    test('has correct hash with nonce zero', () => {
        expect(block.hash).toBeDefined();
        expect(block.nonce).toBe(0);
    });

    test('mines block with difficulty 2', () => {
        block.mineBlock(2);
        expect(block.hash.substring(0, 2)).toEqual('00');
    });
});
