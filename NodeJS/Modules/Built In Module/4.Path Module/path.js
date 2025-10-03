
const path = require("path");

// Current file path
console.log("File name:", __filename);

// Current directory path
console.log("Directory name:", __dirname);

// Get only the base file name
console.log("Base name:", path.basename(__filename));

// Get only the directory name
console.log("Dir name:", path.dirname(__filename));

// Get file extension
console.log("Extension:", path.extname(__filename));

// Parse the full path into an object
console.log("Parse:", path.parse(__filename));

// Join paths
const newPath = path.join(__dirname, "files", "test.txt");
console.log("Join:", newPath);

// Resolve absolute path
const resolvedPath = path.resolve("files", "test.txt");
console.log("Resolve:", resolvedPath);
