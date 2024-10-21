const Reservation = require ("../models/Reservation.model.js");
const mongoose = require('mongoose');

// Get all reservations
const getReservations= async (req, res) => {
    
    try {
      const reservations = await Reservation.find();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching reservations' });
    }
  };
  
  // Create new reservation
 const createReservations =  async (req, res) => {
    try {
      const reservation = new Reservation(req.body);
      await reservation.save();
      res.json({ message: 'Reservation created successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error creating reservation' });
    }
  };
  
  // Delete reservation
  const deleteReservations = async (req, res) => {
    const {id}=req.params;
    try {
      const result= await Reservation.findByIdAndDelete(id);
      if (!result){
        return res.status(400).json({message: 'Reservation not found'})
      }
      res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting reservation' });
    }
  };
  
module.exports = { 
    getReservations, 
    createReservations,
    deleteReservations 
};  