const express = require("express");
const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

//if uses another folder
app.use("views","./views");

// Import routes
const homeRoutes = require("./routes/home");
const aboutRoutes = require("./routes/about");
const contactRoutes = require("./routes/contact");

// Use routes
app.use("/", homeRoutes);        // Home
app.use("/about", aboutRoutes);  // About
app.use("/contact", contactRoutes); // Contact

// Start server
app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
  