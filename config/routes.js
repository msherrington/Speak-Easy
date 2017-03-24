const router = require('express').Router();
const usersController = require('../controllers/users');

router.route('/users')
.get(usersController.index);
// .post(usersController.create);


// router.all('*', (req, res, err) => res.status(500).json(err));
router.all('*', (req, res) => res.notFound());
//need to updste this with res.notfound

module.exports = router;
