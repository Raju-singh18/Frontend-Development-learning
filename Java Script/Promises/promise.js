// <!-- the promise is an object representing the eventual completion or failure of an asynchronous operation. -->

 let promiseOne = new Promise(function(resolve, reject){
   let success = true;
   if(success){
     resolve("Promised fullfilled");
   }
   else{
    reject("Promised rejected");
   }
});

promiseOne.then((message)=>{
     console.log("then ka message is "+ message);
    
}).catch((error)=>{
    console.log("Error:"+ error);
})