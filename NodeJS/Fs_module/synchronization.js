
const fs = require('fs');
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname,fileName);

//------ write file ----------

// const writeFile = fs.writeFileSync(fileName, "this is the initial data  ", "utf-8");
// console.log(writeFile);
// ----------------------------------


//------ readFile--------------

// const readFile1 = fs.readFileSync(filePath);
// console.log(readFile1);
// output-> <Buffer 74 68 69 73 20 69 73 20 74 68 65 20 69 6e 69 74 69 61 6c 20 64 61 74 61 20 20>

// console.log(readFile1.toString());
// output -> this is the initial data  

// const readFile2 = fs.readFileSync(filePath, "utf-8");
// console.log(readFile2);
// output -> this is the initial data 
// ! Use .toString() if working eith binary data (Buffer): For example if you need both the raw binary data and its string representation.
// -------------------------------------

// -------Update file ------

// const appendFile = fs.appendFileSync(filePath,
//     "\nThis is updated data",
//     "utf-8"
// );

// console.log(appendFile);
// ----------------------------------



// -------delete File -----------

// const fileDelete = fs.unlinkSync(filePath);
//  console.log(fileDelete);
// ---------------------------------- 
 
// ----------rename file ----------

const newUpdatedFileName = "updateTest.txt";

const newFilePath = path.join(__dirname, newUpdatedFileName);

const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);

