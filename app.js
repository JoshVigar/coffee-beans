const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const router = require('./routes/router');

const DB_NAME = 'mongodb://localhost:27017/coffee';

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

mongoose.connect(DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    `app connected to ${DB_NAME}`
  });

app.use('/api', router);

module.exports = app;