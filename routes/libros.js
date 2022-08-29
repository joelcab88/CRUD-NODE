var express = require("express");
var router = express.Router();
const libroController = require("../controllers/librosController");
const multer = require("../Config/MulterFile");

router.get("/", libroController.index);
router.post("/crear", multer.single("archivo"), libroController.agregaLibro);

module.exports = router;
