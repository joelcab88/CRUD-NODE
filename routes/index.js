var express = require("express");
var router = express.Router();
const libroController =  require('../controllers/librosController');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express-Node-test" });
});

router.get("/libros", libroController.index);

module.exports = router;
