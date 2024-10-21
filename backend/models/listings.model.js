const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

module.exports = mongoose.model("Listing", listingSchema);

