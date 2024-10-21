const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const ListingsRoutes = require('./routes/listingsRoute');
const reservationRoute = require('./routes/ReservationRoute');

require('dotenv').config();



const app = express();
app.use(cors());
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/listings",ListingsRoutes)
// Connect to the database before starting the server

app.use("/api/reservation",reservationRoute )
mongoose.connect(process.env.MONGO_URI)
 .then((result) => app.listen (process.env.PORT, () => {
  console.log('Connected to db & listen on port', process.env.PORT)
 }))




