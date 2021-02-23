// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2113',
  database: 'appkass'
});
 
// simple query
connection.query(
  'SELECT * FROM `appusers`',
  function(err, results, fields) {
    console.table(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);