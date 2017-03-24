const Skill = require('../models/skill');

function indexRoute(req, res, next) {
  Skill
    .find()
    .then((skills) => res.json(skills))
    .catch(next);
}



module.exports = {
  index: indexRoute
  // create: createRoute,
  // show: showRoute,
  // update: updateRoute,
  // delete: deleteRoute
};
