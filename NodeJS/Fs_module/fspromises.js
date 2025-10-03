

const fs = require('fs');
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname,fileName);


// ------read file in folder ------------------
// const file = __dirname;

// fs.promises.readdir(file)
// .then((data)=> console.log(data))
// .catch((err)=> console.error(err));
// output -> [
//   'asyncs.js',
//   'fspromises.js',
//   'fsPromises.txt',
//   'sync.js',
//   'updateTest.txt'
// ]

// -------------------------------------------------
// ---------------Now CRUD Operations----------------

//  --------- Create File -----------------------------------
// fs.promises
// .writeFile(filePath,"this is the fspromises data", "utf-8")
// .then(console.log("File created successfully"))
// .catch((err) => console.error(err));

// output -> File created successfully

// -----------------------------------------------------------

// ----------------read file -------------

// fs.promises.readFile(filePath,"utf-8")
// .then((data)=> console.log(data))
// .catch((err)=> console.error("Error reading file: ", err));

// -----------------------------------

// ------------ update file -----------

// fs.promises.appendFile(filePath, "\nthis is updated", "utf-8")
// .then(console.log("File updated successfuly"))
// .then(
//     (err) => console.log(err)
// );
// ---------------------------------------

// ------------------delete File ---------------

// fs.promises.unlink(filePath)
// .then(console.log("File Deleted Successsfully"))
// .catch((err) => console.error(err));

// ----------------------------------------

// -------------- through fs/promises-------------

const fs1 = require('fs/promises');
// const path = require("path");

const fileName1 = "fsPromises.txt";
const filePath1 = path.join(__dirname,fileName1);

fs1. 
writeFile(filePath1,"this is the fspromises data", "utf-8")
.then(console.log("File created successfully"))
.catch((err) => console.error(err));

// output -> File created successfully
// -----------------------------------------------
