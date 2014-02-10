'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var FoodTruckSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true
  },
  details: {
    type: String,
    default: '',
    trim: true
  },
  location: {
    type: [Number],
    index: '2dsphere'
  }
});

module.exports = mongoose.model('FoodTruck', FoodTruckSchema);
