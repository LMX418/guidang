var express = require('express');
var bodyParse = require('body-parser')
var ejs = require('ejs')
var app = express();

app.set('views',__dirname + '/views/')
app.set('view engine','ejs')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static('./public/'))

require('./config/routers.js')(app)

app.listen(3066);


