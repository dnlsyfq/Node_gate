const express = require('express');
const app = express();

app.use(express.static('public'));


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});



/*
app.get('/', (req, res) => {
  res.render('hello.ejs');
});
*/

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index',(req,res) => {
  res.render('index.ejs')
});





app.listen(3000);
