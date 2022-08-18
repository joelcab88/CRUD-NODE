var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Node-test' });
});

router.get('/libros', (req,res,next) =>{
  res.render('Libros/libro');
});

module.exports = router;
