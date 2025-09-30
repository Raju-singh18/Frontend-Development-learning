
const crypto = require("crypto");

// Algorithm & Key
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);   // 32 bytes key for AES-256
const iv = crypto.randomBytes(16);    // Initialization vector

// Function to encrypt
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}

// Function to decrypt
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

// Example
const message = "Hello Mahima Bhardwaj!";
const encryptedMsg = encrypt(message);
const decryptedMsg = decrypt(encryptedMsg);

console.log("Original:", message);
console.log("Encrypted:", encryptedMsg);
console.log("Decrypted:", decryptedMsg);
