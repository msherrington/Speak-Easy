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
        location: '',
        lat: 51.5074,
        lng: 0.1278,
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
        location: '',
        lat: 52.5074,
        lng: 0.1279,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Mark',
        email: 'markS@ga.com',
        profilePic: '../images/MarkSherrington.jpg',
        password: 'Mark',
        passwordConfirmation: 'Mark',
        location: '',
        lat: 53.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'Conor',
        email: 'conor@ga.com',
        profilePic: '../images/ConorHeena.jpg',
        password: 'conor',
        passwordConfirmation: 'conor',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'adrian',
        email: 'adrian@ga.com',
        profilePic: '../images/adrian.jpg',
        password: 'adrian',
        passwordConfirmation: 'adrian',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'arrianne',
        email: 'arrianne@ga.com',
        profilePic: '../images/ArrianneOshea.jpg',
        password: 'arrianne',
        passwordConfirmation: 'arrianne',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'ben',
        email: 'ben@ga.com',
        profilePic: '../images/BenCurrie.jpg',
        password: 'ben',
        passwordConfirmation: 'ben',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'buki',
        email: 'buki@ga.com',
        profilePic: '../images/BukiThompson.jpg',
        password: 'buki',
        passwordConfirmation: 'buki',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'fabricio',
        email: 'fabricio@ga.com',
        profilePic: '../images/FabricioFerreria.jpg',
        password: 'fabricio',
        passwordConfirmation: 'fabricio',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'giacomo',
        email: 'giacomo@ga.com',
        profilePic: '../images/GiacomoBrunetti.jpg',
        password: 'giacomo',
        passwordConfirmation: 'giacomo',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'gianmmaria',
        email: 'gianmmaria@ga.com',
        profilePic: '../images/GianmariaCarrodano.jpg',
        password: 'gianmmaria',
        passwordConfirmation: 'gianmmaria',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'hannah',
        email: 'hannah@ga.com',
        profilePic: '../images/hannahJones.jpg',
        password: 'hannah',
        passwordConfirmation: 'hannah',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'huw',
        email: 'huw@ga.com',
        profilePic: '../images/HuwFernie.jpg',
        password: 'huw',
        passwordConfirmation: 'huw',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'jake',
        email: 'jake@ga.com',
        profilePic: '../images/JakeAdams.jpg',
        password: 'jake',
        passwordConfirmation: 'jake',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'kristian',
        email: 'kristian@ga.com',
        profilePic: '../images/KrisztianGroz.jpg',
        password: 'kristian',
        passwordConfirmation: 'kristian',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'mark',
        email: 'mark@ga.com',
        profilePic: '../images/mark.jpg',
        password: 'mark',
        passwordConfirmation: 'mark',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'muge',
        email: 'muge@ga.com',
        profilePic: '../images/muge.jpg',
        password: 'muge',
        passwordConfirmation: 'muge',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'olivia',
        email: 'olivia@ga.com',
        profilePic: '../images/oliviaVaughanFowler.jpg',
        password: 'olivia',
        passwordConfirmation: 'olivia',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'omar',
        email: 'omar@ga.com',
        profilePic: '../images/omar.jpg',
        password: 'omar',
        passwordConfirmation: 'omar',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'raiden',
        email: 'raiden@ga.com',
        profilePic: '../images/raiden.jpg',
        password: 'raiden',
        passwordConfirmation: 'raiden',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'sarah',
        email: 'sarah@ga.com',
        profilePic: '../images/SarahMiller.jpg',
        password: 'sarah',
        passwordConfirmation: 'sarah',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'tom',
        email: 'tom@ga.com',
        profilePic: '../images/TomAllen.jpg',
        password: 'tom',
        passwordConfirmation: 'tom',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'roman',
        email: 'roman@ga.com',
        profilePic: '../images/roman.jpg',
        password: 'roman',
        passwordConfirmation: 'roman',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'sam',
        email: 'samD@ga.com',
        profilePic: '../images/SamDomesjo.jpg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }, {
        username: 'sam',
        email: 'sam@ga.com',
        profilePic: '../images/SamWakefield.jpg',
        password: 'sam',
        passwordConfirmation: 'sam',
        location: '',
        lat: 50.5074,
        lng: 0.1277,
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
        location: '',
        lat: 49.5074,
        lng: 0.1278,
        skills: [{
          language: skills[1],
          level: 'Beginner'
        }]
      }]);
  })
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
