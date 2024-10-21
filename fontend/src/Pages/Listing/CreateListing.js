import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateListing.css";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BicycleIcon from "@mui/icons-material/DirectionsBike";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SecurityIcon from "@mui/icons-material/Security";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link  } from "react-router-dom";

const CreateListing = () => {
  const [rooms, setRooms] = useState("");
  const [bath, setBath] = useState("");
  const [Name, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const navigate = useNavigate();

  const amenitiesList = [
    { name: "Garden view", icon: <CameraAltIcon /> },
    { name: "Kitchen", icon: <KitchenIcon /> },
    { name: "Wifi", icon: <WifiIcon /> },
    { name: "Pets allowed", icon: <PetsIcon /> },
    { name: "Free washer - in building", icon: <LocalLaundryServiceIcon /> },
    { name: "Dryer", icon: <DryCleaningIcon /> },
    { name: "Central air conditioning", icon: <AcUnitIcon /> },
    { name: "Security cameras on property", icon: <SecurityIcon /> },
    { name: "Refrigerator", icon: <CameraAltIcon /> },
    { name: "Bicycles", icon: <BicycleIcon /> }
  ];

  const handleAddAmenity = (amenity) => {
    if (amenity && !amenities.some(a => a.name === amenity.name)) {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', Name);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('rooms', rooms);
    formData.append('bath', bath);
    formData.append('image', image); // Add image file
    formData.append('amenities', amenities.map(a => a.name).join(',')); // Join amenities into a string

    try {
      const response = await fetch("http://localhost:4000/api/listings", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create listing");
      }
      navigate("/view-listings"); // Redirect after successful creation
    } catch (error) {
      console.error(error);
      alert("Error creating listing: " + error.message);
    }
  };
  const handleClick = () => {
    navigate('/view-listings'); // Navigate to the new page
  };
  

  return (
    <div>
            <div className="head">

<div className="left">
<Link to="/"><img
  src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
  className="header-logo"
  alt="logo"
/></Link>
</div>
<div className="menu-icons"></div>
  <div className="profile-menu-icon">
  <span className="Become-host">Become a Host</span>
  <LanguageIcon className="language-icon" />
  <div className="profile-menu-icons">
    <MenuIcon className="menu-icon" />
    <AccountCircleIcon className="account-icon" />
  </div>
  </div>
</div>
<div className="accountbuttons">
<span><button>my Listings</button></span>
  </div>   
    <form >
    <h1>Create Listing</h1>
    <label>
      Name:
      <input
        type="text"
        value={Name}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </label>
    <label>
      Location:
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
    </label>
    <label>
      Description:
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </label>
    <label>
      Rooms:
      <input
        type="number"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        required
      />
    </label>
    <label>
      Bath:
      <input
        type="number"
        value={bath}
        onChange={(e) => setBath(e.target.value)}
        required
      />
    </label>

    <div>
      <label>Amenities:</label>
      <div>
        {amenities.map((amenity, index) => (
          <div key={index}>
            {amenity.icon} {amenity.name}
          </div>
        ))}
      </div>
      <select onChange={(e) => handleAddAmenity(amenitiesList[e.target.selectedIndex])}>
        <option value="">Select an amenity</option>
        {amenitiesList.map((amenity, index) => (
          <option key={index} value={amenity.name}>
            {amenity.name}
          </option>
        ))}
      </select>
    </div>

    <label>
      Price:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
    </label>
    <label>
      Type:
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Cabin">Cabin</option>
      </select>
    </label>
    <label>
      Upload Image:
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
    </label>
    <button type="submit" className="createbutton" onClick={handleClick}>Create</button>
    <button type="button" className="cancelbutton" >
      Cancel
    </button>
  </form></div>
  
  );
};

export default CreateListing;
