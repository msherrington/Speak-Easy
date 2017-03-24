const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  lang: { type: String, required: true }
});

module.exports = mongoose.model('Skill', skillSchema);
