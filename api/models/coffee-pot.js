const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeePotSchema = new Schema({
  beans_array: { 
    type: Array,
    default: []
  },
  created_at: { 
    type: Number,
    default: new Date().getTime()
  }
});

module.exports = mongoose.model('CoffeePot', coffeePotSchema);
