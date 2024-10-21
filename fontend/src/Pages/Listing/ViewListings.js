import React, { useEffect, useState } from "react"; 
import "./ViewListings.css";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link  } from "react-router-dom";

const ViewListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/listings");
        if (!response.ok) throw new Error("Failed to fetch listings");
        const result = await response.json();
        console.log(result); // Check the structure here
        if (result.success) {
          setListings(result.data); // Access the data property
        } else {
          throw new Error("Failed to fetch listings");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/listings/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete listing");
      setListings((prevListings) => prevListings.filter(listing => listing._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = (id) => {
    alert(`Update listing with ID: ${id}`);
  };

  if (loading) return <p>Loading listings...</p>;
  if (error) return <p>Error: {error}</p>;

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
  
<Link className="Become-host" to="/adminLogin">Become a Host</Link>
  <LanguageIcon className="language-icon" />
  <div className="profile-menu-icons">
    <MenuIcon className="menu-icon" />
    <AccountCircleIcon className="account-icon" />
  </div>
  </div>
</div>
<div className="accountbuttons">
<button>View Reservation</button>
<span><button>View Listings</button></span>
  <span><button>create Listing</button></span>
  </div>
      <h1>Your Listings</h1>
      {listings.length === 0 ? (
        <p>No listings available</p>
      ) : (
        listings.map((listing) => (
          <div className="listing" key={listing._id}>
            <h3 className="listing-title">{listing.name}</h3>
            <p className="listing-location">{listing.location}</p>
            {listing.image ? (
              <img src={listing.image} alt={listing.name} style={{ width: "100px" }} />
            ) : (
              <p>No image uploaded</p>
            )}
            <p className="listing-description">{listing.description}</p>
            <button className="button button-update" onClick={() => handleUpdate(listing._id)}>
              Update
            </button>
            <button className="button button-delete" onClick={() => handleDelete(listing._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewListings;
