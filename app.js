const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const DB_NAME = 'mongodb://localhost:27017/coffee';

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

mongoose.connect(DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    `app connected to ${DB_NAME}`
  });

module.exports = app;