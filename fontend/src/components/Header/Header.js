import React, { useRef, useState, useEffect } from "react";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DatePicker from "react-datepicker";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "react-datepicker/dist/react-datepicker.css";


import { useNavigate } from 'react-router-dom';

const Header = () => {
const [checkInDate, setCheckInDate] = useState(null);
const [checkOutDate, setCheckOutDate] = useState(null);

const [guestCount, setGuestCount] = useState(1);
const [showGuestPopup, setShowGuestPopup] = useState(false);
const popupRef = useRef(null);

const handleGuestChange = (operation) => {
  setGuestCount((prevCount) => {
    const newCount =
      operation === "increment" ? prevCount + 1 : prevCount - 1;
    return Math.max(1, Math.min(10, newCount));
  });
};

const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);
   

  const navigate = useNavigate();

  const handleClick = () => {
    const isLoggedIn =localStorage.getItem('isLoggedIn') === 'true' /* your logic to check if user is logged in */;
    
    if (isLoggedIn) {
        navigate('/Standard'); // Navigate to Standard if logged in
    } else {
        navigate('/Login'); // Navigate to LoginPage if not logged in
    }
};


  
  return (
    
    <div className="header">
      
      <img
        src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
        className="header-logo"
        alt="logo"
      />
      
      <div className="header-text">
        <p>Place to Stays</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
        <div className="menu-icons"></div>
        <div className="profile-menu-icon">
        <span className="Become-host">Become a Host</span>
        <LanguageIcon className="language-icon" />
        <div className="profile-menu-icons">
          <MenuIcon className="menu-icon" />
          <AccountCircleIcon className="account-icon" onClick={handleClick}/>
          
        </div>
        </div>
        
      </div>
      <div className="header-links">
        

        <div className="header-bottom">
          <div className="header-search">
            <div className="search-where">
              <p>Locations</p>
              <div className="search-input">
              <select >
              <option onClick={handleClick}>All Locations </option>
              <option value>France</option>
              <option value>London</option>
              <option value>Cape Town</option>
              <option value>Sydney</option>
              </select>
            </div>
            </div>
            <div className="search-checkin">
              <p>CheckIn date</p>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select date"
                className="date-picker"
                />
              
            </div>
            <div className="search-checkout">
              <p>CheckOut date</p>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select date"
                className="date-picker"
                />
             
            </div>
            <div className="search-who">
              <p>Guests</p>
              <button className="search-button" 
              onClick={()=> setShowGuestPopup(true)}
              >
               {guestCount >0
               ? `${guestCount}Guests`
               : `${guestCount} Guest`}
               
              </button>
              {showGuestPopup && (
                <div className="guest-popup" ref={popupRef}>
                  <div className="guest-selector">
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("decrement")}
                    >
                      <RemoveIcon />
                    </button>
                    <input
                      type="number"
                      value={guestCount}
                      readOnly
                      className="guest-input"
                    />
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("increment")}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <SearchIcon />
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default Header;
