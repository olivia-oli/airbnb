const express = require('express');

const multer = require('multer');
const { createListing,deleteListing,getListings, updateListing } = require ("../controller/listing.controller.js");

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Error handling for multer
router.post("/", upload.single('image'), (req, res, next) => {
    // Log multer errors
    if (req.fileValidationError) {
      return res.status(400).send(req.fileValidationError);
    }
    next();
  }, createListing); 
router.get("/",getListings );  
  
router.put("/:id",updateListing);  
router.delete("/:id",deleteListing );
  
module.exports = router;


