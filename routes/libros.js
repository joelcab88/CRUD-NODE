var express = require("express");
var router = express.Router();
const libroController = require("../controllers/librosController");

router.get("/", libroController.index);
router.post("/crear", libroController.agregaLibro);

module.exports = router;
