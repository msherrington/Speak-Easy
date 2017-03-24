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
    language: 'English'
  }, {
    language: 'French'
  }])
  .then((skills) => {
    console.log(`${skills.length} skills created!`);
    return User
      .create([{
        username: 'Adrian',
        email: 'adrian@ga.com',
        passsword: 'adrian',
        skills: [{
          language: skills[0],
          level: 'Beginner'
        }]
      }, {
        username: 'Alice',
        email: 'alice@ga.com',
        passsword: 'alice',
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
