const coffeePot = require('../models/coffee-pot');

function index (req, res, next) {
  const pot = coffeePot.find().then(
    pots => {
      // TODO deal with duplicates
      pots[0].beans_array.push(req.body.user_id);
      pots[0].save();
      console.log(pots[0]);
    }
  ).catch(next);
  res.send('You have been added to the coffee-pot');
};

module.exports = { index };
