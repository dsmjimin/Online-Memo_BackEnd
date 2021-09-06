var mysql = require('mysql');

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'sesqq0909',
    database    : 'semicolonstudy'
});

connection.connect();

module.exports = connection;