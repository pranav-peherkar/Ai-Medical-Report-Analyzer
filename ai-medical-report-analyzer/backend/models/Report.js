const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  fileUrl: String,
  extractedText: String,
  summary: String,
  abnormalities: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', reportSchema);