
const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

// ------- write File -------------------------------

// fs.writeFile(filePath,"This is the initial data", 'utf-8', (err)=>{
//      if(err) console.error(err);
//      else console.log("File has been saved");
// } )
// output -> File has been saved

// ------------------------------------------------

// ----------------read file ----------------------
 
// 1 -> tarika
// fs.readFile(filePath,'utf-8',(err,data)=>{
//     if(err) console.error(err);
//     else console.log(data);
// })
// output -> This is the initial data

// 2-> tarika
// fs.readFile(filePath, (err,data)=>{
//     if(err) console.error(err);
//     else console.log(data.toString());
// })
// output ->This is the initial data 

// --------------------------------------------------

// -----------------update file ------------------------

// fs.appendFile(filePath,"\nThis is the updated data","utf-8",(err)=>{
//     if(err) console.error(err);
//     else console.log("File has been updated");
// });

// --------------------------------------------------------

// -----------------delete data --------------------------

 fs.unlink(filePath,(err)=>{
   if(err) console.error(err);
   else console.log("File has been deleted");
 });

//  -----------------------------------------------------------