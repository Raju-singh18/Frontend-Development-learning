
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
//   'asyncshronization.js',
//   'fsAsyncAwait.js',
//   'fspromises.js',
//   'fsPromises.txt',
//   'synchronization.js',
//   'updateTest.txt'
// ]

// const readFolder = async () => {
//     try {
//         const res = await  fs.promises.readdir(file);
//         console.log(res);
        
//     } catch (error) {
//          console.error(error);   
//     }
// }  
// readFolder();
// output -> [
//   'asyncshronization.js',
//   'fsAsyncAwait.js',
//   'fspromises.js',
//   'fsPromises.txt',
//   'synchronization.js',
//   'updateTest.txt'
// ]

// ----------------------------------------------------

// --------------- create File ----------------------
// const writeFileExample = async () => {
//     try {
//           await fs.promises.writeFile(filePath,"this is the aync await data", "utf-8");
//           console.log("File created Successfully!");  
//     } catch (error) {
//         console.error(error);
//     }

// };

// writeFileExample();
// output -> File created Successfully!
// ------------------------------------

// -------------read File ---------------

// const readFileExample = async () => {
//    try {
//     const res = await fs.promises.readFile(filePath,"utf-8");
//     console.log(res);
//    } catch (error) {
//     console.error(error);
    
//    }
// }
// readFileExample();
// output -> this is the aync await data
// -------------------------------------------------------------

// -------------------------update file ---------------------------------

// const updateFileExample = async () => {
//     try {
//         await fs.promises.appendFile(filePath, "\nthis is updated data", "utf-8");
//         console.log("file updated");
        
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// updateFileExample();
// output -> file updated
// ----------------------------------------------------------------------------------

// -------------delete File -----------------------

// const deleteFileExample = async () =>{
//     try {
//        await fs.promises.unlink(filePath);
//         console.log("file deleted successfuly");
        
//     } catch (error) {
//         console.error("Error deleting file:", error.message);
        
//     }
// }
// deleteFileExample();

// output -> file deleted successfuly
// -------------------------------------------------


