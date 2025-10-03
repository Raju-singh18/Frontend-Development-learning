
const path = require("path");

console.log(__dirname);
console.log(__filename);

// school folder/ Students/ data.txt

const filePath = path.join("folder","students","data.txt");
console.log(filePath);

const parsedata = path.parse(filePath);

const resolvedPath = path.resolve(filePath);

const extname = path.extname(filePath);

const basename = path.basename(filePath);

const dirname = path.dirname(filePath);

console.log({parsedata, resolvedPath, extname, basename, dirname, Seprator: path.sep});



