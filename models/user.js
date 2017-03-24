const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {type: String, required: true },
  passsword: {type: String, required: true },
  skills: [{
    language: { type: mongoose.Schema.ObjectId, ref: 'Skill' },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }
  }]
});

module.exports = mongoose.model('User', userSchema);
