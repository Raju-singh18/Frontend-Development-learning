
const crypto = require("crypto");

// Example password
const password = "Mahima@123";

// Create a hash using SHA-256
const hash = crypto.createHash("sha256").update(password).digest("hex");

console.log("Password:", password);
console.log("Hashed Password:", hash);
