const coffeePot = require('../models/coffee-pot');
const { groupMessage } = require('../../lib/slack/coffee-bot');

function index (req, res, next) {
  const pot = coffeePot.find().then(
    pots => {
      // TODO deal with duplicates
      console.log(pots[0].beans_array.length)
      pots[0].beans_array.push(req.body.user_id);
      console.log(pots[0].beans_array.length)
      if (pots[0].beans_array.length >= process.env.MAX_BEANS){
        groupMessage(pots[0].beans_array.join(','))
        pots[0].beans_array = []
      }
      pots[0].save();
      console.log(pots[0]);
    }
  ).catch(next);
  res.send('You have been added to the coffee-pot');
};

module.exports = { index };
