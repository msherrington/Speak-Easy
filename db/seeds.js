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
        password: 'guv',
        skills: [{
          language: skills[0],
          level: 'Beginner'
        },{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Alice',
        email: 'alice@ga.com',
        password: 'alice',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
