const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  Bookedby: {
    type: String,
    required: true
  },
  Property: {
    type: String,
    required: true
  },
  
  Checkin: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
 
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;