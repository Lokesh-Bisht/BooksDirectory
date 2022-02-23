const mysql = require('mysql')

const connection = mysql.createConnection({
  host      : process.env.DB_HOST,
  user      : process.env.DB_USER,
  password  : process.env.DB_PASSWORD,
  database  : process.env.DB_NAME
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database is connected.")
});

module.exports = connection;