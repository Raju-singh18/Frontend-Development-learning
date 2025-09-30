
const fs = require("fs");
fs.readFile("example.txt",'utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log("example txt data",data);
    console.log("You have created file system successfully");
})
