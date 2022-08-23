var express = require('express');
var router = express.Router();
const libroController =  require('../controllers/librosController');

router.get("/", libroController.index);

module.exports = router;

