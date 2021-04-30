const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const router = require('./routes/router');
const CoffeePot = require('./api/models/coffee-pot');

const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

mongoose.connect(process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    `app connected to ${process.env.DB_NAME}`
  });

// CoffeePot.deleteMany({}, () => {})

// TODO move into a helper
const brewCoffee = () => {
  // check if pots exist
  const allPots = CoffeePot.find()
    .then(pots => { 
      // create a pot
      if (pots.length < 1){
        const newPot = new CoffeePot
        newPot.save()
      }
    });
};
brewCoffee();

app.use('/api', router);

module.exports = app;
