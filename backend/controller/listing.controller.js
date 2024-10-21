const Listing = require ("../models/listings.model.js");
const mongoose = require('mongoose');

 const getListings = async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.status(200).json({ success: true, data: listings });
  } catch (error) {
    console.log("error in fetching listings:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const createListing = async (req, res) => {
  const listing = req.body; // user will send this data

  if (
    !listing.name ||
    !listing.location ||
    !listing.description ||
    !listing.price ||
    !listing.type ||
    !listing.image ||
    !listing.amenities ||
    !listing.rooms ||
    !listing.bath
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newListing = new Listing(listing);

  try {
    await newListing.save();
    res.status(201).json({ success: true, data: newListing });
  } catch (error) {
    console.error("Error in create listing:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // Corrected usage
    return res
      .status(400)
      .json({ success: false, message: "Invalid Listing Id" });
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, listing, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedListing });
  } catch (error) {
    console.error("Error updating listing:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Listing Id" });
  }
  try {
    await Listing.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Listing deleted" });
  } catch (error) {
    console.log("Error in deleting listing:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getListings,
  deleteListing,
  updateListing,
  createListing
}