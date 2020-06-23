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
  
  const upload = multer({
	storage: storageDisk,
	// Validate image
	fileFilter: (req, file, cb) => {
	   const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
	   const ext = path.extname(file.originalname);
	   if (!acceptedExtensions.includes(ext)){
			 req.file = file;
	   }
	   cb(null, acceptedExtensions.includes(ext));
	} });



  module.exports = upload