
const crypto = require("crypto");

const  randomvalue = crypto.randomBytes(8);
console.log(randomvalue);
// output-> <Buffer 3b 24 6a f3 f5 f9 6f de>

const  randomvalue1 = crypto.randomBytes(8).toString("hex");
console.log(randomvalue1);
// output -> 50425e6da8d6ca24

const hashValue = crypto.createHash("sha256");
console.log(hashValue);
// output-> Hash {
//   _options: undefined,
//   [Symbol(kHandle)]: Hash {},
//   [Symbol(kState)]: { [Symbol(kFinalized)]: false }
// }

const hashValue1 = crypto.createHash("sha256").toString("Raju Singh");
console.log(hashValue1);
// output-> Hash {
//   _options: undefined,
//   [Symbol(kHandle)]: Hash {},
//   [Symbol(kState)]: { [Symbol(kFinalized)]: false }
// }

// const hashValue2 = crypto.createHash("sha256").update("Raju Singh").digest("hex");
// console.log(hashValue2);
// 632b4350dee4e6cba6dbc2cfd3bc5c4a8cb503e473e2e61482d7df319f83272b
 
const hashValue3 = crypto.createHash("sha256").update("Raju Singh").digest("hex");
console.log(hashValue3);
// 632b4350dee4e6cba6dbc2cfd3bc5c4a8cb503e473e2e61482d7df319f83272b
// hashValue2 = hashValue3

