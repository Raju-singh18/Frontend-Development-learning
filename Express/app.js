
import express from "express";
import { PORT } from "./env.js";
import Path from "path";

const app = express();

// absolute path
const staticPath =  Path.join(import.meta.dirname,"public");
 
// app.use(express.static("public"));
app.use(express.static(staticPath));
// app.use("/public", express.static(staticPath));
// !-------------------routes parameters-------------
// app.get("profile/:username", (req, res) => { 
    console.log(req.params);
     res.send("hii");
    // ? {username : "rajuSingh"}
app.get("profile/:username/article/:slug", (req, res) => {
    // res.send(`<h1> Article ${req.params.username} by ${req.params.slug}</h1>`)
    //? output --> Article vinodthapa by how-to-learn-expressjs
    const formatedSlug = req.params.slug.replace(/-/g," ");
     res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`)
    //?  output -> Article raju by how to learn expressjs
}) ;  
// !-------------------folder and file path--------------------
// console.log(import.meta.dirname);//? C:\Users\ASUS\Desktop\NodeJs\Express
// console.log(import.meta.filename);//? C:\Users\ASUS\Desktop\NodeJs\Express\app.js
// !------------------ fetching data from api ---------------------------

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await response.json();
// console.log(json);
//? output-> { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// !----------------------- Basics in express js ------------------------------ 
// app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

// app.get("/about", (req, res) => res.send("<h1>Hello About Page</h1>"));

// app.get("/contact", (req, res) => {
//    return res.send(`    <div class="container">
//           <h1>URL Shortener</h1>
//           <form action="" id="shorten-form">
//             <div class="input">
//                 <label for="url">Enter URL:</label>
//                 <input type="url" name="url" id="url" required>
//             </div>
//             <div class="input">
//                 <label for="shortCode">Enter ShortCode:</label>
//                 <input type="text" name="shortCode" id="shortCode" required>
//             </div>
//             <button type="submit">Shorten</button>
//           </form>

//           <h2>Shortened URLs</h2>
//           <ul id="shortened-urls"></ul>
//     </div>`);
// })

 // console.log(process);

 // const PORT = 3000;
 // const PORT = process.env.PORT || 3000;
// !-------------------------------------

// !--------------------how to send file in express js--------------------------

// app.get("/", (req, res) => {
    // console.log(__dirname); // not working
    // console.log(__filename); //not working
// *---------------------------------------------------
    // console.log(import.meta.dirname);  //?C:\Users\ASUS\Desktop\NodeJs\Express
    // console.log(import.meta.url); //? file:///C:/Users/ASUS/Desktop/NodeJs/Express/app.js 
// *---------------------------------------------------
    // const __filename = new URL(import.meta.url);
    // console.log(__filename);
// ?    URL {
// ?  href: 'file:///C:/Users/ASUS/Desktop/NodeJs/Express/app.js',
// ?  origin: 'null',
// ?  protocol: 'file:',
// ?  username: '',
// ?  password: '',
// ?  host: '',
// ?  hostname: '',
// ?  port: '',
// ?  pathname: '/C:/Users/ASUS/Desktop/NodeJs/Express/app.js',
//  ? search: '',
//  ? searchParams: URLSearchParams {},
//?hash: ''
//? }
// *-------------------------------------------------------------------------

    // const __filename = new URL(import.meta.url).pathname;
    // console.log(__filename); //?/C:/Users/ASUS/Desktop/NodeJs/Express/app.js

// //*----------------------------------------------------------------------------
// res.send("Hi"); 

// *---------------------------------------

// const homePagePath = Path.join(import.meta.dirname,"public", "index.html");

// res.sendFile(homePagePath);
      
// })
// !--------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

