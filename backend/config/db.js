const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: 'root',         
  database: 'decor_site'
});

connection.connect(err => {
  if (err) throw err;
  console.log('MySQL connected.');
});

module.exports = connection;
