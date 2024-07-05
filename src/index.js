const Blockchain = require("./blockchain");
const Block = require("./block");

const doingCoin = new Blockchain();

console.log("DoingCoin mining in progress...");
doingCoin.addBlock(new Block(1, new Date().toISOString(), { sender: "Alice", recipient: "Bob", quantity: 50 }));
doingCoin.addBlock(new Block(2, new Date().toISOString(), { sender: "Charlie", recipient: "Dave", quantity: 75 }));

console.log(JSON.stringify(doingCoin, null, 2));
