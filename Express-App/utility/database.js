const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node-app",
  password: "123456",
});

module.exports = connection.promise();
