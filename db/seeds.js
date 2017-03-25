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
        profilePic: 'http://i.huffpost.com/gen/1688700/images/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg',
        password: 'Guv',
        passwordConfirmation: 'Guv',
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
        profilePic: 'http://i.huffpost.com/gen/1688700/images/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg',
        password: 'Valerio',
        passwordConfirmation: 'Valerio',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Mark',
        email: 'mark@ga.com',
        profilePic: 'http://i.huffpost.com/gen/1688700/images/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg',
        password: 'Mark',
        passwordConfirmation: 'Mark',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Conor',
        email: 'conor@ga.com',
        profilePic: 'http://i.huffpost.com/gen/1688700/images/o-HAPPY-DOG-DAY-OF-HAPPINESS-facebook.jpg',
        password: 'Conor',
        passwordConfirmation: 'Conor',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
