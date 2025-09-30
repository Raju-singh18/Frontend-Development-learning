
const http = require("http");

const myServer = http.createServer((req, res)=>{
res.end("Hello Yogesh this is your first Htpp server");

});

myServer.listen(8080,()=>{
    console.log("Yogesh , your server is running on port 8080");
})

