const docenteController = require('../controllers/docenteController');
const router = require('express').Router();

router.route('/docentes')
    .get(docenteController.getAllDocentes)

router.route('/docentes/:matricula')
    .get(docenteController.getDocente)
    // .post(docenteController.setDocente)

router.route('/auth')
    .post(docenteController.authenticate)

module.exports = router;