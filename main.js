const readline = require("readline-sync");
const BlockChain = require("./BlockChain");

const isAffirmative = text => ["y", "yes"].includes(text.toLowerCase());

console.log("welcome to blockgen!");
console.log("create a basic blockchain...");
let name = readline.question("blockchain name: ");
let difficulty = readline.question("level of difficulty: ");
const blockchain = new BlockChain(name, difficulty);

const numBlocks = readline.question("specify the number of blocks: ");

for (let i = 0; i < numBlocks; i++) {
  console.log("Mining...");
  blockchain.addBlock({ val: i });
}

const printChain = readline.question("print this blockchain?");
if (isAffirmative(printChain)) {
  console.log(`Printing ${blockchain.name}...`);
  console.log(JSON.stringify(blockchain, null, 3));
} else {
  console.log("chain not printed");
}

const valid = readline.question("validate this blockchain? ");
if (isAffirmative(valid)) {
  console.log(`blockchain validity: ${blockchain.validateChain()}`);
} else {
  console.log("validation not performed");
}

console.log("thanks for using blockgen!");
