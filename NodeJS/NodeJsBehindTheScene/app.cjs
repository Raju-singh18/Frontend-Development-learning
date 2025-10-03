
const fs = require("fs");
const path = require("path");
const fileName = "fsPromises.txt";
const filePath = path.join(__dirname,fileName);
const fileName1 = "sync.txt";
const filePath1 = path.join(__dirname,fileName1);

// * ----------file creation---------
// fs.promises
// .writeFile(filePath1,"this is the synchronous data", "utf-8")
// .then(console.log("File created successfully"))
// .catch((err) => console.error(err));

// *---------------------------------------*//

// ?----------------------
//* his happens because your package.json has "type": "module", so Node treats .js files as ESM (ECMAScript modules), where require() is not available
// ?---------------------------
// ! ---------Synchronous tasks--------------------
// ? -------------------------------------
//  ! Synchronous task
// console.log("start");
//  ! Synchronous task
// const data = fs.readFileSync(filePath,'utf-8');
// console.log(data);

// output-> 
// start
// this is the fspromises data
// ?---------------------------------------
// const data = fs.readFileSync(filePath,'utf-8');
// console.log(data);
//  console.log("start");

//  output --> this is the fspromises data
// start
// ?-----------------------------------------------------


// !-------------------------Asynchronous Task--------------

console.log("start");
//  ! Synchronous task
const data = fs.readFileSync(filePath1,'utf-8');
 console.log(data);

//  Asynchronous task
fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})

// Synchronous task
console.log("end");

// output -->
// start
// this is the synchronous data
// end
// this is the fspromises data
// !----------------------------------------------------------- 
