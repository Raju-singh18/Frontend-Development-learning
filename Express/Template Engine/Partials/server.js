const express = require("express");
const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

// Import route
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

// Start server
app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
