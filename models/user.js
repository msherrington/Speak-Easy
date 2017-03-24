const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

reviewSchema.methods.ownedBy = function ownedBy(user) {
  return this.addedBy.id === user.id;
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {type: String, required: true, unique: true },
  passsword: {type: String, required: true },
  skills: [{
    language: { type: mongoose.Schema.ObjectId, ref: 'Skill' },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }
  }],
  reviews: [ reviewSchema ]
});

module.exports = mongoose.model('User', userSchema);
