var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const teste = require('./routes/teste');
const db = require('./config/database');
db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nikss.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teste', teste)

module.exports = app;
