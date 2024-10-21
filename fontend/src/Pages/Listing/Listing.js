import React,{useState, useEffect} from 'react'
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import './Listing.css';
import FlagIcon from "@mui/icons-material/Flag";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SecurityIcon from "@mui/icons-material/Security";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BicycleIcon from "@mui/icons-material/DirectionsBike";
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../../components/Footer/Footer';
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ListingDetailPage from './ListingDetailPage'; 
import { useNavigate } from 'react-router-dom';


const Listing = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [guests, setGuests] = useState(2); 
  const PerNight = 75; 

 
  const calculateNights = (startDate, endDate) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end - start;
      return timeDifference > 0 ? timeDifference / (1000 * 60 * 60 * 24) : 0;
    }
    return 0;
  };


  const calculateTotalPrice = () => {
    const nights = calculateNights(checkInDate, checkOutDate);
    const guestSurcharge = guests > 2 ? (guests - 2) * 10 : 0; 
    const roomTotal = (PerNight + guestSurcharge) * nights;
    const cleaningFee = 62;
    const serviceFee = 83;  
    const taxesAndFees = 29; 
    return roomTotal + cleaningFee + serviceFee + taxesAndFees;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [checkInDate, checkOutDate, guests]);


  const navigate = useNavigate();



  const handleGuestChange = (action) => {
    if (action === "increment") {
      setGuests((prevGuests) => prevGuests + 1);
    } else if (action === "decrement" && guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  const [nights, setNights] = useState(1);
 
  const [cleaningFee, setCleaningFee] = useState(20);
  const [serviceFee, setServiceFee] = useState(15);
  

  

  const handleNightsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNights(value > 0 ? value : 1); // Ensure at least 1 night
  };

  const handleNightsIncrement = () => {
    setNights(nights + 1);
  };

  const handleNightsDecrement = () => {
    if (nights > 1) {
      setNights(nights - 1); // Decrement correctly
    }
  };

  const handleReserve = () => {
    navigate('/reservation');
  };
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
      
      <div className="text">
        <p>Place to Stays</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
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

      <div className="listing">
      <section >
      <div >
            <h1>Bordeaux Getaway</h1>
            <div>
              <span>
                ⭐ 5.0 . <Link>7 reviews</Link> · Superhost ·{" "}
                <Link>Bordeaux, France</Link>{" "}
              </span>
              <span className="listing-icons">
                <IosShareIcon /> Share <FavoriteBorderIcon /> Save{" "}
              </span>
            </div>
          </div>
      </section> 
      </div>
        

      <div className="gallery">
        <div className="large-image">
        <img src="https://housedesigner.com/wp-content/uploads/2022/09/013-min-scaled-optimized.jpg" alt="Large Gallery Image"
        className="first-room"
        />
      <div className="thumbnails">
        <img src="https://www.isuporta.com/wp-content/uploads/2019/12/airbnb-hero-.jpg" alt="Thumbnail 1"/>
        <img src="https://www.shutterstock.com/image-photo/winter-cottages-remote-area-quebec-600nw-2263026143.jpg" alt="Thumbnail 2"/>
        <img src="https://media.istockphoto.com/id/1396053072/photo/man-with-a-suitcase-walking-through-the-patio-doors-of-his-accommodation.jpg?s=612x612&w=0&k=20&c=6rJbOue8TKw2YEC8E1xiC4h1RUwKBoFzTZTfq_pllWE=" alt="Thumbnail 3"/>
        <div className="thumb">
        <img src="https://redress.co.za/wp-content/uploads/2023/06/Airbnb-ready-cottage-design-Prince-Albert-10.jpg" alt="Thumbnail 4"/>
        <button className="photos-button">
         <GridViewIcon className="grid-icon" /> Show All Photos
        </button>
        </div>
      </div>
    </div>
  </div>

  
        
  
  <section className="listing-info">
  
  <div className="host-info">
          <div className="contain">
            <div className="content">
            <h1>Entire rental unit hosted by Olivia</h1>
            <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
            </div>
            <div class="image-contain">
            <img
            src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"alt="person"
            className="person"
            />
            </div>
          </div>
            
            
            <hr />
            <div className="features-container">
              <div className="feature">
                <HomeIcon />
                <ul>
                <span>Entire home</span>
                <p>You'll have the apartment to yourself.</p>
                </ul>
              </div>
              <div className="feature">
              <AutoAwesomeIcon />
                <ul>
                <span>Enhanced Clean</span>
                <p>
                  This Host committed to Airbnb's 5-step enhanced cleaning
                  process. Show more
                </p>
                </ul>
              </div>  
              <div className="feature">
              <DoorFrontIcon />
                <ul>
                <span>Self check-in</span>
                <p>Check yourself in with the keypad.</p>
                </ul>
                </div>  
              
                <div className="feature">
                <CalendarMonthIcon />
                <span>Free cancellation before Feb 14</span>
                </div> 
            </div>
            <div>
              <section className="listing-description">
                <p>
                  Come and stay in this superb duplex T2, in the heart of the
                  historic center of Bordeaux. Spacious and bright, in a real
                  Bordeaux building in exposed stone, you will enjoy all the
                  charms of the city thanks to its ideal location. Close to many
                  shops, bars and restaurants, you can access the apartment by
                  tranA and C and bus routes 27 and 44....
                </p>
                <Link>Show more</Link>
              </section>
            </div>
            <hr />
            <section className="where-you-sleep">
              <h3>Where you'll sleep</h3>
              <div className="bedroom">
                <img
                  src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/4/5/0/original_Kerrisdale-Designs-neutral-bedroom-nailhead-headboard_h.jpg.rend.hgtvcom.616.462.suffix/1400954165146.jpeg"
                  alt="bedroom"
                />
                <p>Bedroom · 1 queen bed</p>
              </div>
            </section>
            <hr />
            <div className="amenities-container">
              <h1>What this place offers</h1>
              <div className="amenities-list">
                {amenitiesList.map((amenity, index) => (
                  <div className="amenity-item" key={index}>
                    {amenity.icon}
                    <span className="amenity-name">{amenity.name}</span>
                  </div>
                ))}
              </div>
              <button className="show-all-amenities-button">
                Show all 37 amenities <ExpandMoreIcon />
              </button>
            </div>
            <hr/>
            <section class="calendar-section">
  

  <div class="calendar-container">
    <div class="calendar-header">
      <span class="arrow">&#60;</span>
      <h3>OCTOBER 2024</h3>
      <h3>NOVEMBER 2024</h3>
      <span class="arrow">&#62;</span>
    </div>

    <div class="calendars">
      <div class="month">
        <div class="days">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        <div class="dates">
          <span class="empty"></span><span class="empty"></span><span class="empty"></span><span class="empty"></span><span class="empty"></span><span class="empty"></span><span>1</span>
          <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
          <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
          <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
          <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
        </div>
      </div>

      <div class="month">
        <div class="days">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        <div class="dates">
          <span class="empty"></span><span class="empty"></span><span class="empty"></span><span class="empty"></span><span>1</span><span>2</span><span>3</span>
          <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
          <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
          <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <CalendarMonthIcon className="month-icon" />
    <button class="clear-dates">Clear dates</button>
  </div>
</section>

            <hr/>
          </div>
          <div className="side-box">
            <div className="left-side">
              <h3><h3>$75/night</h3></h3>
              <p>
                1 nights: <strong>$75</strong>
              </p>
            </div>
            <div className="Left-fields">
              <div className="checkin-checkout">
                <div className="checkin">
                <p>CHECK-IN</p>
                <input 
                  type="date" 
                  onChange={(e) => setCheckInDate(e.target.value)} 
                />
                </div>
                <div className="checkout">
                <p>CHECKOUT</p>
                <input 
                  type="date" 
                  onChange={(e) => setCheckOutDate(e.target.value)} 
                />
                </div>
              </div>

              {/* Guests Section with Increment and Decrement */}
              <div className="left-selection">
              <label>
                Guest
                <button className="left-button" onClick={handleNightsDecrement}>
                  −
                  </button>
                <input
                 type="number"
                  value={nights}
                  min="1"
                  onChange={handleNightsChange}
                />
                <button className="left-button" onClick={handleNightsIncrement}>
                +
                </button>
                </label>
              </div>
            </div>


            <button className="lift-button" onClick={handleReserve}>
      Reserve
    </button>
            <p className="charge">You won't be charged yet.</p>
            <ul className="money">
              <li>
                Weekly discount: <span className="negative-amount"></span>
              </li>
              <label>
              <p>${PerNight} x {calculateNights(checkInDate, checkOutDate)} nights</p>
              <p className="perNight">${(PerNight * calculateNights(checkInDate, checkOutDate)).toFixed(2)}</p>
              
              </label>
              <li>
              <p>Cleaning Fee :</p>
              <>$22</>
              </li>
              <li>
              <p>Service Fee :</p>
              <p>$15</p>
             </li>
             </ul>
             <div className="amount">
              <p>
                <strong>Total Cost: ${totalPrice}
                </strong>
              </p>
             </div>
             <hr/>
             {/* Report this listing link */}
             <div className="report">
             <FlagIcon />
             <Link to="#" className="links">
              Report this listing
             </Link>
             </div>
          </div>
  </section>
        

      <ListingDetailPage/>  
      <Footer/>
    </div>
 
  )
}

export default Listing
