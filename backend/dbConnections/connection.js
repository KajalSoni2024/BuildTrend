const mysql = require("mysql2");
require("dotenv").config();
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  dateStrings: true,
});

module.exports = conn;
