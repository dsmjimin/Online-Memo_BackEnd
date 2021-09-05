const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');  //ejs는 HTML에서 JS를 같이 쓸 수 있게 해주는 템플릿
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html')
})

const server = app.listen(8080, () => {
    console.log('The server is running');
})