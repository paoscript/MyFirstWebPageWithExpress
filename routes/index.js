var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'PaoScript' });
});

router.get('/proyects', function(req, res, next) {
  res.render('proyect', { title: 'Mis proyectos' });
});

module.exports = router;
