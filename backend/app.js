const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const teste = require('./routes/teste');
const curso = require('./routes/curso');
const professor = require('./routes/professor');

const db = require('./config/database');

db(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nikss.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/teste', teste);

app.use('/curso', curso);

app.use('/professor', professor);

module.exports = app;
