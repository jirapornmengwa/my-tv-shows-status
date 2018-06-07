const mongoose = require('mongoose');

let ShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Show', ShowSchema);
