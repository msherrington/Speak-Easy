const router = require('express').Router();
const usersController = require('../controllers/users');
const skillsController = require('../controllers/skills');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');

router.route('/users')
// .all(secureRoute)
.get(usersController.index)
.post(imageUpload, usersController.create);

router.route('/users/:id')
.all(secureRoute)
.get(usersController.show)
.put(imageUpload, usersController.update)
.delete(usersController.delete);

router.route('/users/:id/edit')
.all(secureRoute);

router.route('/message')
.all(secureRoute)
.post(usersController.sendMail);

//Reviews routes
router.route('/users/:id/reviews')
  .post(secureRoute, usersController.addReview);

router.route('/users/:id/reviews/:reviewId')
  .delete(secureRoute, usersController.deleteReview);

// skills
router.route('/skills')
  // .all(secureRoute)
  .get(skillsController.index)
  .post(skillsController.create);
  //
router.route('/skills/:id')
  // .all(secureRoute)
  .get(skillsController.show)
  // .put(skillsController.update)
  .delete(skillsController.delete);

//New routes
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

//UPVOTES//
// router.route('/users/:id/upvote')
//   .put(secureRoute, usersController.upvote);

//oauth routes
router.route('/oauth/github')
  .post(oauth.github);

router.route('/oauth/facebook')
  .post(oauth.facebook);

// router.all('*', (req, res, err) => res.status(500).json(err));
router.all('*', (req, res) => res.notFound());

module.exports = router;
