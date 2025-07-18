const disciplinaController = require('../controllers/disciplinaController');
const router = require('express').Router();

router.route('/disciplinas')
    .get(disciplinaController.getAllDisciplinas)

router.route('/disciplinas/:id')
    .get(disciplinaController.getDisciplina)

module.exports = router;