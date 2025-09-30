
 
const fs = require('fs');
fs.appendFile("singh.txt","File added succcessfully",(err)=>{
    if(err){
        throw err;
    }
    console.log("Data added in my file successfully");
})
