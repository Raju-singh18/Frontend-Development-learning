import mysql from "mysql2/promise";

// 1. Connect to MySQL server
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Raju1234@",
  database: "mysql_db",
});
console.log("MYSQL Connected Successfully");

//! 2. Create database (only run once)
// await db.execute("CREATE DATABASE mysql_db");
// console.log(await db.execute("SHOW DATABASES"));

//! 3. Create table (only run once)
// await db.execute(`
//   CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//   );
// `);

//! 4. Perform CRUD operations

//!============= INSERT====================
//* USing Inline values (Not Recommended)
// await db.execute(
//   `INSERT INTO users (username, email) VALUES ('Raju','rajusingh.mca26@gmail.com')`
// )
// ===============OR====================
//* USing Prepared Statements (Best Practice)
// await db.execute(
//   "INSERT INTO users (username, email) VALUES (?, ?)",
//   ["Rakesh", "rakeshsingh.mca26@gmail.com"]
// );

// *=============for multiple data at a time =========
// const values = [
//     ["Alice","alice@example.com"],
//     ["Bob","bob@example.com"],
//     ["Charlie","Charlie@example.com"],
//     ["David","David@example.com"],
//     ["Shephard","Shepharde@example.com"],
// ];

// await db.query("INSERT INTO users(username, email) values ?",[values]);
// *=========================================================== 
// ? ========== insert a record with id = 3 ==========
// await db.execute(
//     "INSERT INTO users (id,username,email) VALUES (3, 'Yogesh','yogesh@example.com')"
// );

//!=========== READ==============================
// const rows = await db.execute("SELECT * FROM users");
// console.log("Users:", rows);
//? =========================== 
//? output:- 
// Users: [
//   [ { id: 1, username: 'Raju', email: 'rajusingh.mca26@gmail.com' } ],
//   [
//     `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,    
//     `username` VARCHAR(100) NOT NULL,
//     `email` VARCHAR(100) NOT NULL UNIQUE_KEY
//   ]
//? =============================

// const [rows] = await db.execute("SELECT * FROM users");
// console.log("Users:", rows);
//? ===============================
// ? output=>
// Users: [ { id: 1, username: 'Raju', email: 'rajusingh.mca26@gmail.com' } ]
// ?==========================
// const [rows] = await db.execute(`SELECT * FROM  users WHERE id="2"`);
// console.log(rows);

// !===========update=================
//?=========SYNTAX=========
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
//? =======================
// try {
//    const [rows] = await db.execute("UPDATE users SET username='Shivam', email='shivam@example.com' WHERE id='2'") ;
//    console.log("All users",rows);
// } catch (error) {
//     console.log(error);
// }
// ?==============================
// try {
//     const[rows] = await db.execute("UPDATE users SET username= ? WHERE email= ?",["Raju Singh","rajusingh.mca26@gmail.com"])
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// }

// !============DELET=======================
// ?==============SYNTAX==========
// DELETE FROM table_name
// WHERE condition;
// ?========================
// try {
//     const [rows] = await db.execute(
//         "DELETE FROM users WHERE email='bob@example.com'"
//     )
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// }
