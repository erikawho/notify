const mongoose = require('mongoose');

// Set geocoderProvider Options
const geocodeOptions = {
  geocoderProvider: 'google',
  httpAdapter:'http',
  extra: {
    // apiKey: 'YOUR_API_KEY',
    formatter: 'gpx'
  }
};

// Create geocoder
const geocoder = require('node-geocoder')(geocodeOptions.geocoderProvider, geocodeOptions.httpAdapter, extra);


const postSchema = mongoose.Schema({
  title: String,
  createdOn: new Date(),
  author_id: String,
  expires: Date,
  content:{
    text: String,
    images: Array,
    date: Date,
    tags: Array,
  },
  location: {
    title: String,
    address: String,
    coords: {
      lat: String,
      lng: String
    }
  }
});


module.exports = exports = mongoose.model('Post', postSchema);
