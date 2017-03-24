const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  language: { type: String, required: true }
});

module.exports = mongoose.model('Skill', skillSchema);
