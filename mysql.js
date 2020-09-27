const mysql = require('mysql');

var pool = mysql.createPool({
    "connectionLimit" : 10,
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT,
    "insecureAuth": true
});

exports.pool = pool;
