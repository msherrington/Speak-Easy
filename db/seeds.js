const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Skill = require('../models/skill');
const User = require('../models/user');

mongoose.connect(dbURI);

Skill.collection.drop();
User.collection.drop();


Skill
  .create([{
    lang: 'English'
  }, {
    lang: 'French'
  }])
  .then((skills) => {
    console.log(`${skills.length} skills created!`);
    return User
      .create([{
        username: 'Guv',
        email: 'gurvinder.singh.sandhu@gmail.com',
        profilePic: '../images/guv.jpg',
        password: 'Guv',
        passwordConfirmation: 'Guv',
        lat: '51.5074',
        lng: '0.1278',
        skills: [{
          language: skills[0],
          level: 'Beginner'
        },{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Valerio',
        email: 'valerio@ga.com',
        profilePic: '../images/ValerioRisuleo.jpg',
        password: 'Valerio',
        passwordConfirmation: 'Valerio',
        lat: '52.5074',
        lng: '0.1279',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Mark',
        email: 'mark@ga.com',
        profilePic: '../images/MarkSherrington.jpg',
        password: 'Mark',
        passwordConfirmation: 'Mark',
        lat: '53.5074',
        lng: '0.1277',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Conor',
        email: 'conor@ga.com',
        profilePic: '../images/ConorHeena.jpg',
        password: 'Conor',
        passwordConfirmation: 'Conor',
        lat: '50.5074',
        lng: '0.1277',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Alice',
        email: 'alice@ga.com',
        profilePic: '../images/AliceMarshall.jpg',
        password: 'alice',
        passwordConfirmation: 'alice',
        lat: '49.5074',
        lng: '0.1278',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
