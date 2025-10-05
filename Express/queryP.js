
import express from "express";

const app = express();
app.get("/product", (req, res) => {
    // ? http://localhost:3000/product
    // console.log(req.query);
    // output in terminal -> [Object: null prototype] {}
    // ? http://localhost:3000/product?search=samsung
    // console.log(req.query);
    // output in terminal ->  [Object: null prototype] { search: 'samsung' }
    // res.send(`<h1> Product ${req.query.search} mobiles</h1>`)
    //? output -> Product samsung mobiles
    // ? http://localhost:3000/product?page=2&limit=10
     console.log(req.query);
    // output in Terminal-> [Object: null prototype] { page: '2', limit: '10' }
    res.send(`<h1> user search for product ${req.query.page} ${req.query.limit} mobile </h1>`);
    // ? user search for product 2 10 mobile
})

app.get("/", (req , res) => {
    res.send(`<h1> This is home page </h1>`);
})
app.listen(3000, ()=>{
    console.log("Server  is running at port no 3000")

})

