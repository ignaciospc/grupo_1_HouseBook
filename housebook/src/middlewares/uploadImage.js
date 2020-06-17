const multer = require("multer");
const path = require('path')

var storage = multer.diskStorage({
    destination : (req, file, cb) => {
      cb(null, 'public/images/libros');
  },
  filename : (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }, 
  });

  var upload = multer({ storage: storage })

  module.exports = upload