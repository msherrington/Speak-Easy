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
  }, {
    lang: 'Java' // 15
  }, {
    lang: 'JavaScript' // 16
  }, {
    lang: 'PHP' // 17
  }, {
    lang: 'Ruby' // 18
  }, {
    lang: 'HTML' // 19
  }, {
    lang: 'Python' // 20
  }, {
    lang: 'CSS' // 21
  }, {
    lang: 'SQL' // 22
  }, {
    lang: 'C++' // 23
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
        skills: [{
          language: skills[10],
          level: 'Advanced'
        },{
          language: skills[0],
          level: 'Native'
        },{
          language: skills[16],
          level: 'Intermediate'
        }]
      }, {
        username: 'Valerio',
        email: 'valerio@ga.com',
        profilePic: '../images/users/ValerioRisuleo.jpg',
        password: 'valerio',
        passwordConfirmation: 'valerio',
        location: '',
        lat: 51.5094,
        lng: -0.0267,
        skills: [{
          language: skills[13],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Adequate'
        }, {
          language: skills[21],
          level: 'Intermediate'
        }, {
          language: skills[16],
          level: 'Adequate'
        }]
      }, {
        username: 'Mark',
        email: 'look@me.com',
        profilePic: '../images/users/MarkSherrington.jpg',
        password: 'password',
        passwordConfirmation: 'password',
        location: '',
        lat: 51.4934,
        lng: -0.0709,
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[3],
          level: 'Adequate'
        }, {
          language: skills[13],
          level: 'Basic'
        }, {
          language: skills[16],
          level: 'Adequate'
        }, {
          language: skills[21],
          level: 'Adequate'
        }]
      }, {
        username: 'Conor',
        email: 'conor.heena2@mail.dcu.ie',
        profilePic: '../images/users/ConorHeena.jpg',
        password: 'conor',
        passwordConfirmation: 'conor',
        location: '',
        lat: 51.5135,
        lng: -0.0703,
        skills: [{
          language: skills[0],
          level: 'Basic'
        }, {
          language: skills[16],
          level: 'Adequate'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[19],
          level: 'Adequate'
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
        skills: [{
          language: skills[9],
          level: 'Intermediate'
        }, {
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[21],
          level: 'Native'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[18],
          level: 'Adequate'
        }]
      }, {
        username: 'Arrianne',
        email: 'arrianne@ga.com',
        profilePic: '../images/users/ArrianneOShea.jpg',
        password: 'arrianne',
        passwordConfirmation: 'arrianne',
        location: '',
        lat: 51.5257,
        lng: -0.0875,
        skills: [{
          language: skills[1],
          level: 'Basic'
        }, {
          language: skills[16],
          level: 'Adequate'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[18],
          level: 'Adequate'
        }]
      }, {
        username: 'Ben',
        email: 'ben@ga.com',
        profilePic: '../images/users/BenCurrie.jpg',
        password: 'ben',
        passwordConfirmation: 'ben',
        location: '',
        lat: 51.5390,
        lng: 0.1426,
        skills: [{
          language: skills[0],
          level: 'Basic'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[23],
          level: 'Native'
        }]
      }, {
        username: 'Buki',
        email: 'buki@ga.com',
        profilePic: '../images/users/BukiThompson.jpg',
        password: 'buki',
        passwordConfirmation: 'buki',
        location: '',
        lat: 51.5771,
        lng: -0.1783,
        skills: [{
          language: skills[11],
          level: 'Advanced'
        }]
      }, {
        username: 'Fab',
        email: 'fabricio@ga.com',
        profilePic: '../images/users/FabricioFerreria.jpg',
        password: 'fabricio',
        passwordConfirmation: 'fabricio',
        location: '',
        lat: 51.4688,
        lng: 0.1254,
        skills: [{
          language: skills[6],
          level: 'Intermediate'
        }, {
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[17],
          level: 'Adequate'
        }]
      }, {
        username: 'Giacomo',
        email: 'giacomo@ga.com',
        profilePic: '../images/users/GiacomoBrunetti.jpg',
        password: 'giacomo',
        passwordConfirmation: 'giacomo',
        location: '',
        lat: 51.5176,
        lng: -0.0655,
        skills: [{
          language: skills[13],
          level: 'Basic'
        }, {
          language: skills[0],
          level: 'Basic'
        }, {
          language: skills[14],
          level: 'Native'
        }]
      }, {
        username: 'Gianmaria',
        email: 'gianmaria@ga.com',
        profilePic: '../images/users/GianmariaCarrodano.jpg',
        password: 'gianmaria',
        passwordConfirmation: 'gianmaria',
        location: '',
        lat: 51.5485,
        lng: -0.4796,
        skills: [{
          language: skills[13],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Advanced'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[18],
          level: 'Adequate'
        }]
      }, {
        username: 'Hannah',
        email: 'hannah@ga.com',
        profilePic: '../images/users/HannahJones.jpg',
        password: 'hannah',
        passwordConfirmation: 'hannah',
        location: '',
        lat: 51.5188,
        lng: -0.0814,
        skills: [{
          language: skills[0],
          level: 'Advanced'
        }, {
          language: skills[16],
          level: 'Adequate'
        }, {
          language: skills[9],
          level: 'Intermediate'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[16],
          level: 'Adequate'
        }]
      }, {
        username: 'Huw',
        email: 'huw@ga.com',
        profilePic: '../images/users/HuwFernie.jpg',
        password: 'huw',
        passwordConfirmation: 'huw',
        location: '',
        lat: 51.507437,
        lng: 0.069935,
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[8],
          level: 'Adequate'
        }]
      }, {
        username: 'Jake',
        email: 'jake@ga.com',
        profilePic: '../images/users/JakeAdams.jpg',
        password: 'jake',
        passwordConfirmation: 'jake',
        location: '',
        lat: 51.478670,
        lng: -0.144886,
        skills: [{
          language: skills[0],
          level: 'Basic'
        }, {
          language: skills[16],
          level: 'Basic'
        }, {
          language: skills[21],
          level: 'Basic'
        }, {
          language: skills[19],
          level: 'Basic'
        }, {
          language: skills[2],
          level: 'Advanced'
        }]
      }, {
        username: 'Kris',
        email: 'kris@ga.com',
        profilePic: '../images/users/KrisztianGroz.jpg',
        password: 'kris',
        passwordConfirmation: 'kris',
        location: '',
        lat: 51.512,
        lng: 0.1316,
        skills: [{
          language: skills[5],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Intermediate'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[16],
          level: 'Adequate'
        }]
      }, {
        username: 'Other Mark',
        email: 'mark@ga.com',
        profilePic: '../images/users/mark.jpg',
        password: 'mark',
        passwordConfirmation: 'mark',
        location: '',
        lat: 51.8959,
        lng: -0.8919,
        skills: [{
          language: skills[1],
          level: 'Basic'
        }, {
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[21],
          level: 'Adequate'
        }, {
          language: skills[19],
          level: 'Adequate'
        }, {
          language: skills[16],
          level: 'Adequate'
        }]
      }, {
        username: 'Muge',
        email: 'muge@ga.com',
        profilePic: '../images/users/muge.jpg',
        password: 'muge',
        passwordConfirmation: 'muge',
        location: '',
        lat: 51.5195,
        lng: -0.0612,
        skills: [{
          language: skills[8],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Advanced'
        }, {
          language: skills[21],
          level: 'Native'
        }]
      }, {
        username: 'Olivia',
        email: 'olivia@ga.com',
        profilePic: '../images/users/OliviaVaughanFowler.jpg',
        password: 'olivia',
        passwordConfirmation: 'olivia',
        location: '',
        lat: 52.2053,
        lng: 0.1218,
        skills: [{
          language: skills[0],
          level: 'Advanced'
        }]
      }, {
        username: 'Omar',
        email: 'omar@ga.com',
        profilePic: '../images/users/omar.jpg',
        password: 'omar',
        passwordConfirmation: 'omar',
        location: '',
        lat: 51.5160,
        lng: -0.0477,
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[16],
          level: 'Native'
        }, {
          language: skills[21],
          level: 'Basic'
        }]
      }, {
        username: 'Raiden',
        email: 'raiden@ga.com',
        profilePic: '../images/users/raiden.jpg',
        password: 'raiden',
        passwordConfirmation: 'raiden',
        location: '',
        lat: 51.4816,
        lng: 3.1791,
        skills: [{
          language: skills[4],
          level: 'Intermediate'
        }, {
          language: skills[0],
          level: 'Adequate'
        }]
      }, {
        username: 'Sarah',
        email: 'sarah@ga.com',
        profilePic: '../images/users/SarahMiller.jpg',
        password: 'sarah',
        passwordConfirmation: 'sarah',
        location: '',
        lat: 51.3474,
        lng: 2.9773,
        skills: [{
          language: skills[0],
          level: 'Adequate'
        }]
      }, {
        username: 'Tom',
        email: 'tom@ga.com',
        profilePic: '../images/users/TomAllen.jpg',
        password: 'tom',
        passwordConfirmation: 'tom',
        location: '',
        lat: 51.7520,
        lng: -1.2577,
        skills: [{
          language: skills[19],
          level: 'Native'
        }]
      }, {
        username: 'Roman',
        email: 'roman@ga.com',
        profilePic: '../images/users/roman.jpg',
        password: 'roman',
        passwordConfirmation: 'roman',
        location: '',
        lat: 53.4808,
        lng: 2.2426,
        skills: [{
          language: skills[21],
          level: 'Advanced'
        }, {
          language: skills[0],
          level: 'Native'
        }]
      }, {
        username: 'Sam',
        email: 'samD@ga.com',
        profilePic: '../images/users/SamDomesjo.jpg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 51.5233,
        lng: -0.0754,
        skills: [{
          language: skills[12],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Adequate'
        }, {
          language: skills[16],
          level: 'Basic'
        }]
      }, {
        username: 'Sam',
        email: 'sam@ga.com',
        profilePic: '../images/users/SamWakefield.jpg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 51.5105,
        lng: 0.5950,
        skills: [{
          language: skills[0],
          level: 'Native'
        }, {
          language: skills[16],
          level: 'Adequate'
        }, {
          language: skills[21],
          level: 'Advanced'
        }, {
          language: skills[19],
          level: 'Native'
        }]
      }, {
        username: 'Alice',
        email: 'alice@ga.com',
        profilePic: '../images/users/AliceMarshall.jpg',
        password: 'alice',
        passwordConfirmation: 'alice',
        location: '',
        lat: 51.5144,
        lng: -0.1174,
        skills: [{
          language: skills[16],
          level: 'Native'
        }, {
          language: skills[0],
          level: 'Intermediate'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
