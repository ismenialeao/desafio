const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const app  = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.locals.moment = require('moment');

module.exports = app

