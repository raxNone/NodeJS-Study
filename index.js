var mysql      = require('mysql');

const dontenv = require('dotenv')

dontenv.config();


var connection = mysql.createConnection(
    {
        host     : process.env.host,
        user     : process.env.user,
        password : process.env.password,
        database : process.env.database,
    }
);

connection.connect();
 
connection.query('SELECT * from user', function (error, results, fields) {
  if (error) throw error;
  console.log('users: ', results);
});
 
connection.end();