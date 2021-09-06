var connection = require('./lib/db');

connection.query('SELECT * FROM topic', function(err, result, fields) {
    if (err) {
        console.log(err);
    }
        console.log(result);
});

//DB 내용 불러오기

connection.end();