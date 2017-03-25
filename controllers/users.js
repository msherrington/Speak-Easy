const User = require('../models/user');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'lingoswapshop@gmail.com',
    pass: process.env.PROJECT3_GMAIL_PASSWORD
  }
});

function indexRoute(req, res, next) {
  User
    .find()
    .populate('skills.language')
    .then((users) => res.json(users))
    .catch(next);
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('skills.language')
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();

      for(const field in req.body) {
        user[field] = req.body[field];
      }

      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function sendMailRoute(req, res, next) {
  const data = req.body;
  transporter.sendMail({
    from: 'Sex Swap',
    to: data.contactTo,
    subject: data.contactName + ' messaged you from SkillSexChange.',
    replyTo: data.contactEmail,
    text: data.contactMsg + '\n\nHit reply to respond directly to ' + data.contactName + ' (' + data.contactEmail + ').'
  },(err, info) => {
    if(err) return next(err);
    console.log(info);
    res.json(data);
  });
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  sendMail: sendMailRoute
};
