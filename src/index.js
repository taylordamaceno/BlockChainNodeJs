const { generateKeyPairSync } = require('crypto');
const Blockchain = require('./blockchain');
const Block = require('./block');

// Gerar um par de chaves para exemplo (em um cenário real, você já teria um par de chaves)
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

const doingCoin = new Blockchain();

console.log("DoingCoin mining in progress...");

// Criar e assinar o primeiro bloco
const block1 = new Block(1, new Date().toISOString(), { sender: 'Alice', recipient: 'Bob', quantity: 50 });
block1.mineBlock(4);
block1.signBlock(privateKey);
doingCoin.addBlock(block1);
console.log('Block 1 signed:', block1.signature);
console.log('Is valid signature for block 1:', block1.isValidSignature(publicKey));

// Criar e assinar o segundo bloco
const block2 = new Block(2, new Date().toISOString(), { sender: 'Charlie', recipient: 'Dave', quantity: 75 });
block2.mineBlock(4);
block2.signBlock(privateKey);
doingCoin.addBlock(block2);
console.log('Block 2 signed:', block2.signature);
console.log('Is valid signature for block 2:', block2.isValidSignature(publicKey));

// Imprimir a blockchain
console.log(JSON.stringify(doingCoin, null, 2));