const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'P8RX77z7',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );
  
  //export
  module.exports = db;
