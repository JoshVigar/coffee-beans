const coffeePot = require('../models/coffee-pot');

function index (req, res) {
  res.send('This is an index');
};

module.exports = { index };