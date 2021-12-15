const mysql = require("mysql8");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myNodeSqlDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database successfully!");
});

module.exports = connection;
