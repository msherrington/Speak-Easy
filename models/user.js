const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const reviewSchema = new mongoose.Schema({
  content: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

reviewSchema.methods.ownedBy = function ownedBy(user) {
  return this.addedBy.id === user.id;
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String },
  password: { type: String },
  location: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  learning: { type: String },
  about: { type: String },
  skills: [{
    language: { type: mongoose.Schema.ObjectId, ref: 'Skill', trim: true },
    level: { type: String, enum: ['Basic', 'Adequate', 'Intermediate', 'Advanced', 'Native']}
  }],
  reviews: [ reviewSchema ]
});

//Allows us tho get access to uploaded images for editing
userSchema
  .path('profilePic')
  .set(function getPreviousImage(profilePic){
    this._profilePic = this.profilePic;
    return profilePic;
  });

userSchema.pre('save', function checkPreviousImage(next){
  if(this.isModified('profilePic') && this._image){
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});
//finished here..

userSchema
 .virtual('imageSRC')
 .get(function getImageSRC() {
   if(!this.image) return null;
   return `https:s3-eu-west-1.amazonaws.com/conor-bucket/${this.image}`;
 });

userSchema.pre('remove', function deleteImage(next){
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
