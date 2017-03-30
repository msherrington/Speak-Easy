const Skill = require('../models/skill');

function indexRoute(req, res, next) {
  Skill
    .find()
    .then((skills) => res.json(skills))
    .catch(next);
}

function createSkillRoute(req, res, next) {
  Skill
    .create(req.body)
    .then((skill) => res.status(201).json(skill))
    .catch(next);
}

function showSkillRoute(req, res, next) {
  Skill
    .findById(req.params.id)
    .exec()
    .then((skill) => {
      if(!skill) return res.notFound();

      res.json(skill);
    })
    .catch(next);
}

function deleteSkillRoute(req, res, next) {
  Skill
    .findById(req.params.id)
    .exec()
    .then((skill) => {
      if(!skill) return res.notFound();

      return skill.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createSkillRoute,
  show: showSkillRoute,
  delete: deleteSkillRoute
};
