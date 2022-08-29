var multer = require("multer");
var multerdate = Date.now();
var multerRoute = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./public/images/");
  },
  filename: (request, file, callback) => {
    console.log(file);
    callback(null, `${multerdate}_${file.originalname}`);
  },
});
var load = multer({ storage: multerRoute });
module.exports = load;
