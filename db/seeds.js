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
    lang: 'English' // 0
  }, {
    lang: 'French' // 1
  }, {
    lang: 'Chinese' // 2
  }, {
    lang: 'Spanish' // 3
  }, {
    lang: 'Kurdish' // 4
  }, {
    lang: 'Hungarian' // 5
  }, {
    lang: 'Portuguese' // 6
  }, {
    lang: 'Bengali' // 7
  }, {
    lang: 'Turkish' // 8
  }, {
    lang: 'Japanese' // 9
  }, {
    lang: 'Punjabi' // 10
  }, {
    lang: 'German' // 11
  }, {
    lang: 'Swedish' // 12
  }, {
    lang: 'Italian' // 13
  }, {
    lang: 'Polish' // 14
  }])
  .then((skills) => {
    console.log(`${skills.length} skills created!`);
    return User
      .create([{
        username: 'Guv',
        email: 'gurvinder.singh.sandhu@gmail.com',
        profilePic: '../images/users/guv.jpg',
        password: 'password',
        passwordConfirmation: 'password',
        location: '',
        lat: 51.5224,
        lng: 0.0086,
        // learning: 'German',
        // about: 'Cunning linguist',
        skills: [{
          language: skills[10],
          level: 'Advanced'
        },{
          language: skills[0],
          level: 'Native'
        }]
      }, {
        username: 'Valerio',
        email: 'valerio@ga.com',
        profilePic: '../images/users/valerio.jpg',
        password: 'valerio',
        passwordConfirmation: 'valerio',
        location: '',
        lat: 51.5094,
        lng: -0.0267,
        // learning: 'English',
        // about: 'Ciao Bellissima!',
        skills: [{
          language: skills[13],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Adequate'
        }, {
          language: skills[16],
          level: 'Adequate'
        }]
      }, {
        username: 'Mark',
        email: 'look@me.com',
        profilePic: '../images/users/mark.jpg',
        password: 'password',
        passwordConfirmation: 'password',
        location: '',
        lat: 51.4934,
        lng: -0.0709,
        locked: false,
        // learning: 'Spanish',
        // about: 'Family man who enjoys learning languages',
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[3],
          level: 'Adequate'
        }, {
          language: skills[13],
          level: 'Basic'
        }]
      }, {
        username: 'Conor',
        email: 'conor@ga.com',
        profilePic: '../images/users/conor.jpg',
        password: 'conor',
        passwordConfirmation: 'conor',
        location: '',
        lat: 51.5135,
        lng: -0.0703,
        // learning: 'Turkish',
        // about: 'I love the craic like any decent Irish lad',
        skills: [{
          language: skills[14],
          level: 'Basic'
        }]
      }, {
        username: 'Adrian',
        email: 'adrian@ga.com',
        profilePic: '../images/users/adrian.jpg',
        password: 'adrian',
        passwordConfirmation: 'adrian',
        location: '',
        lat: 51.5177,
        lng: -0.0773,
        // learning: 'Thai',
        // about: 'Use my drone to explore other countries',
        skills: [{
          language: skills[9],
          level: 'Intermediate'
        }, {
          language: skills[0],
          level: 'Native'
        }]
      }, {
        username: 'Arrianne',
        email: 'arrianne@ga.com',
        profilePic: '../images/users/arriane.jpg',
        password: 'arrianne',
        passwordConfirmation: 'arrianne',
        location: '',
        // learning: 'Anything',
        // about: 'Who wants to help me?',
        lat: 51.5257,
        lng: -0.0875,
        skills: [{
          language: skills[1],
          level: 'Basic'
        }]
      }, {
        username: 'Fab',
        email: 'fabricio@ga.com',
        profilePic: '../images/users/fab.jpg',
        password: 'fabricio',
        passwordConfirmation: 'fabricio',
        location: '',
        // learning: 'Italian',
        // about: 'Borderline Genius/Madman',
        lat: 51.4688,
        lng: 0.1254,
        skills: [{
          language: skills[6],
          level: 'Intermediate'
        }, {
          language: skills[0],
          level: 'Native'
        }]
      }, {
        username: 'Giacomo',
        email: 'giacomo@ga.com',
        profilePic: '../images/users/jack.jpg',
        password: 'giacomo',
        passwordConfirmation: 'giacomo',
        location: '',
        // learning: 'British English',
        // about: 'Polyglot practicing regional accents',
        lat: 51.5176,
        lng: -0.0655,
        skills: [{
          language: skills[13],
          level: 'Basic'
        }, {
          language: skills[0],
          level: 'Basic'
        }, {
          language: skills[11],
          level: 'Native'
        }]
      }, {
        username: 'Gianmaria',
        email: 'gianmaria@ga.com',
        profilePic: '../images/users/james.jpg',
        password: 'gianmaria',
        passwordConfirmation: 'gianmaria',
        location: '',
        // learning: 'English',
        // about: 'I need to make it better my English please',
        lat: 51.5485,
        lng: -0.4796,
        skills: [{
          language: skills[13],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Advanced'
        }]
      }, {
        username: 'Sam',
        email: 'samD@ga.com',
        profilePic: '../images/users/sam.jpg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 51.5233,
        lng: -0.0754,
        // learning: 'Spanish',
        // about: 'Y\'all know me.',
        skills: [{
          language: skills[12],
          level: 'Native'
        }]
      }, {
        language: skills[0],
        level: 'Adequate'
      }, {
        username: 'Hannah',
        email: 'hannah@ga.com',
        profilePic: '../images/users/hannah.jpg',
        password: 'hannah',
        passwordConfirmation: 'hannah',
        location: '',
        lat: 51.5234,
        lng: -0.0757,
        // learning: 'French',
        // about: 'Sacre bleu!',
        skills: [{
          language: skills[11],
          level: 'Basic'
        }, {
          language: skills[0],
          level: 'Native'
        }]
      }, {
        username: 'Sarah',
        email: 'sarah@ga.com',
        profilePic: '../images/users/sarah.jpg',
        password: 'sarah',
        passwordConfirmation: 'sarah',
        location: '',
        lat: 51.5333,
        lng: -0.0754,
        // learning: 'German',
        // about: 'I like shiny things.',
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[2],
          level: 'Adequate'
        }]
      }, {
        username: 'Derek',
        email: 'del@boy.com',
        profilePic: '../images/users/derek.jpeg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 51.5239,
        lng: -0.0764,
        // learning: 'French',
        // about: 'Je ne sais quoi, you plonker',
        skills: [{
          language: skills[0],
          level: 'Adequate'
        }, {
          language: skills[1],
          level: 'Advanced'
        }]
      }, {
        username: 'James',
        email: 'james@bond.com',
        profilePic: '../images/users/james.jpeg',
        password: 'bond',
        passwordConfirmation: 'bond',
        location: '',
        lat: 51.5233,
        lng: -0.0754,
        // learning: 'Punjabi',
        // about: 'Licensed to... learn lots of languages.',
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[2],
          level: 'Advanced'
        }, {
          language: skills[11],
          level: 'Advanced'
        }, {
          language: skills[13],
          level: 'Advanced'
        }, {
          language: skills[3],
          level: 'Advanced'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
