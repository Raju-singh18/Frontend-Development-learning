
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1> Welcome to my portfolio, Thank you. </h1>");
        res.end();
    }
   if(req.url==='/about'){
       res.setHeader("Content-Type", "text/plain");
        res.write("I am a full stack web developer");
        res.end();
    }
       if(req.url==='/contact'){
       res.setHeader("Content-Type", "text/plain");
        res.write("For contact me whatsApp now");
        res.end();
    }
    
}); 

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Litening at PORT No ${PORT}`);
})

