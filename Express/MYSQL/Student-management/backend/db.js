
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Raju1234@",
  database: "studentdb"
});

module.exports = pool.promise();
