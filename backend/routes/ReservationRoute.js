const express = require('express');
const { getReservations,createReservations,deleteReservations } = require('../controller/Reservation.controller.js');

const router = express.Router();
router.get("/",getReservations );  
router.post("/",createReservations); 
router.delete("/:id",deleteReservations);


module.exports = router;