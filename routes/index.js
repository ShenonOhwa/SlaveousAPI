var express = require('express');
var router = express.Router();

var indexController = require('../controllers/IndexController');

// Route vers la racine
router.get('/', indexController.bonjour);

router.get('/infosCompte', indexController.infosCompte);

router.get('/listeComptes', indexController.listeComptes);

module.exports = router;
