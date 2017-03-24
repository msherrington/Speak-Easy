const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Skill = require('../models/skill');
const User = require('../models/user');

mongoose.connect(dbURI);

Skill.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Adrian',
    email: 'andrian@ga.com',
    passsword: 'adrian'
  }, {
    username: 'Alice',
    email: 'alice@ga.com',
    passsword: 'alice'
  }])
  .then((students) => console.log(`${students.length} students created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());



Skill
.create([{
  language: 'English',
  level: 'Advanced'
}, {
  language: 'French',
  level: 'Beginner'
}])
.then((skills) => console.log(`${skills.length} skills created!`))
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());
