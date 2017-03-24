const User = require('../models/user');

function indexRoute(req, res, next) {
  User
    .find()
    .then((users) => res.json(users))
    .catch(next);
}

module.exports = {
  index: indexRoute
  // create: createRoute,
  // show: showRoute,
  // update: updateRoute,
  // delete: deleteRoute
};
