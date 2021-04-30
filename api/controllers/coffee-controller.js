const coffeePot = require('../models/coffee-pot');
const { groupMessage } = require('../../lib/slack/coffee-bot');

function addToPot(req, res, next) {
  const pot = coffeePot.find().then(
    pots => {
      const beansArray = pots[0].beans_array

      if (beansArray.includes(req.body.user_id)){
        res.send('You are already in the coffee-pot!');
        return null;
      }

      beansArray.push(req.body.user_id);

      if (beansArray.length >= process.env.MAX_BEANS){
        groupMessage(beansArray.join(','))
        pots[0].beans_array = []
      }
      
      pots[0].save();
      res.send('You have been added to the coffee-pot');
    }
  ).catch(next);
};

module.exports = { addToPot };
