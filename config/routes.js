const router = require('express').Router();
const usersController = require('../controllers/users');
const skillsController = require('../controllers/skills');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/users')
// .all(secureRoute)
.get(usersController.index)
.post(usersController.create);

router.route('/users/:id')
.all(secureRoute)
.get(usersController.show)
.put(usersController.update)
.delete(usersController.delete);

router.route('/message')
.post(usersController.sendMail);


// skills

router.route('/skills')
.all(secureRoute)
.get(skillsController.index);

//New routes
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.all('*', (req, res, err) => res.status(500).json(err));
router.all('*', (req, res) => res.notFound());

module.exports = router;
