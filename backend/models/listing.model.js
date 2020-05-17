const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true, trim: true },
    additional: { type: String, required: false },
    players: { type: Number, required: true },
    location: { type: String, required: true },
  }, {
    timestamps: true,
  });
  
  const Listing = mongoose.model('Listing', listingSchema);
  
  module.exports = Listing;