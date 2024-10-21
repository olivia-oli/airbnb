import React, { useState, useEffect } from 'react';
import './Reservation.css';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/reservation');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []); // Add dependency array

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/reservation/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the reservation');
      }
      setReservations((prevReservations) =>
        prevReservations.filter(reservation => reservation._id !== id)
      );
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleClick = () => {
    navigate('/create-listing');
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
        <button>View Reservation</button>
        <button>View Listings</button>
        <button onClick={handleClick}>Create Listing</button>
      </div>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Booked by</th> 
            <th>Property</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.Bookedby}</td>
              <td>{reservation.Property}</td>
              <td>{new Date(reservation.Checkin).toLocaleDateString()}</td>
              <td>{new Date(reservation.CheckOut).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(reservation._id)}>Delete</button>
              </td>
            </tr>
          ))}
          
          {/* Static rows for additional information */}
          <tr>
            <td>Tina Nemaguvhuni</td>
            <td>Luxury Villa</td>
            <td>{new Date('2024-11-01').toLocaleDateString()}</td>
            <td>{new Date('2024-11-07').toLocaleDateString()}</td>
            <td>
              <button >Delete</button>
            </td>
          </tr>
          <tr>
            <td>Fatima Ndlovu</td>
            <td>Beach House</td>
            <td>{new Date('2024-12-15').toLocaleDateString()}</td>
            <td>{new Date('2024-12-22').toLocaleDateString()}</td>
            <td>
              <button >Delete</button>
            </td>
          </tr>
          <tr>
            <td>Sizwe Khenjani</td>
            <td>Beach House</td>
            <td>{new Date('2024-12-15').toLocaleDateString()}</td>
            <td>{new Date('2024-12-22').toLocaleDateString()}</td>
            <td>
              <button >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
