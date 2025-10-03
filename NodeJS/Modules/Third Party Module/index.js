// server.js
const express = require("express");
const app = express();

console.log("app instance is",app);

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// !===========mongoose===========
// const mongoose = require("mongoose");

// console.log(mongoose);
// mongoose.connect('mongodb://localhost:27017/testDB');
// const userschema = new mongoose.Schema({
//     name:String,
//     age:Number,
// });

// const User = mongoose.model("User", userschema);
// const newUser = new User({
//     name:"raju",
//     age:"21",
// });

// newUser.save().then(()=> console.log("User saved"));

