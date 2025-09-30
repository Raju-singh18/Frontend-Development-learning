
const os = require("os");

// Architecture (x64, arm, etc.)
console.log("CPU Architecture:", os.arch());

// Platform (win32, linux, darwin)
console.log("Platform:", os.platform());

// Hostname of the system
console.log("Hostname:", os.hostname());

// OS release version
console.log("OS Release:", os.release());

// Total system memory in GB
console.log("Total Memory:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");

// Free system memory in GB
console.log("Free Memory:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");

// Uptime of system in seconds
console.log("System Uptime (seconds):", os.uptime());

// Info about CPU cores
console.log("CPU Info:", os.cpus());

// Network interfaces (IP, MAC, etc.)
console.log("Network Interfaces:", os.networkInterfaces());

// Current user info
console.log("User Info:", os.userInfo());
