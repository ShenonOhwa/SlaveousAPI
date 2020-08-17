var express = require('express');
var router = express.Router();

var indexController = require('../controllers/IndexController');

// Route vers la racine
router.get('/', indexController.bonjour);

module.exports = router;
