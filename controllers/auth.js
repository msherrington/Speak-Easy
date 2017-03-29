const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
// const oauth = require('../config/oauth');

// function login(req, res) {
//   res.render('/login', { oauth });
// }

function register(req, res, next){
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next);
}

function login(req, res, next){
  // res.render('/login', { oauth });
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.unauthorized();

      //Generate a JWT and send it to the client//
      //sign method essentially means generate a token
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      //Personalised greeting message
      res.json({ token, message: `Welcome back ${user.username}` });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
