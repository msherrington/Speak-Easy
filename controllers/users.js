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

// function profileRoute(req, res, next) {
//   User
//     .findById(req.user.id)
//     .populate('reviews, createdBy')
//     .exec()
//     .then((user) => {
//       if(!user) return res.notFound();
//       res.json(user);
//     })
//     .catch(next);
// }

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('skills.language')
    .populate('createdBy reviews.createdBy')
    .exec()
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

function addReviewRoute(req, res, next){
  req.body.createdBy = req.user;

  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      const review = user.reviews.create(req.body);
      user.reviews.push(review);

      return user.save()
        .then(() => res.json(review));
    })
    .catch(next);
}

function deleteReviewRoute(req, res, next){
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();

      const review = user.reviews.id(req.params.reviewId);
      review.remove();

      return user.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: indexRoute,
  create: createRoute,
  // profile: profileRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  sendMail: sendMailRoute,
  addReview: addReviewRoute,
  deleteReview: deleteReviewRoute
};
