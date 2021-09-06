var mysql = require("mysql");

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'sesqq0909!',
    connectionLimit: 5,
    database:"semicolonstudy"
});

connection.connect();
//https://askforyou.tistory.com/30?category=887470  