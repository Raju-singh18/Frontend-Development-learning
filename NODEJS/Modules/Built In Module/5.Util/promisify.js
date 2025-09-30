
const fs = require("fs");
const util = require("util");

//! Converts callback-based functions into Promise-based functions.
const read = util.promisify(fs.readFile);

async function readFile() {
    try {
        const data = await read("Sample.txt","utf-8");
        console.log(data);
     } catch (error) {
        console.log(error);
    }
    
}

readFile();