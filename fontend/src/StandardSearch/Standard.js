import React from 'react'
import './Standard.css';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link  } from "react-router-dom";


const Standard = () => {
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
                <button>price</button>
                <span><button>Type of place</button></span>
                <span><button>Free cancellation</button></span>
                <span><button>wifi</button></span>
                <span><button>Kitchen</button></span>
                <span><button>washer</button></span>
                <span><button>Iron</button></span>
                <span><button>Dedicated workspace</button></span>
                <span><button>Free parking</button></span>
                <span><button>Dryer</button></span>
                <span><button>Filters</button></span>
            </div>
      
      
    <div className="standard-card">
    <div className="card-content">
        <img src="https://housedesigner.com/wp-content/uploads/2022/09/013-min-scaled-optimized.jpg" alt="Bordeaux" class="card-image"/>
        <div className="text-content">
            <h4>Entire home in Bordeaux</h4>
            <h5>Bordeaux Getaway</h5>
            <div className="details">
                <span>4-6 guests | Entire Home | 5 beds | 3 baths</span>
            </div>
            <div className="amenities">
                <span>wifi</span>
                <span>kitchen</span>
                <span>Free Parking</span>
            </div>
            <div className="sooter">
                <span class="rating">5.0 ⭐ (318 reviews)</span>
                <span class="price">$175/night</span>
            </div>
        </div>
    </div>
</div>
<div className="standard-card">
    <div className="card-content">
        <img src="https://www.shutterstock.com/image-photo/white-cream-bedroom-holiday-home-600nw-1365919679.jpg" alt="Bordeaux" class="card-image"/>
        <div className="text-content">
            <h4>Entire home in Cape Town</h4>
            <h5>Cape Town</h5>
            <div className="details">
                <span>4-10 guests | Entire Home | 6 beds | 4 baths</span>
            </div>
            <div className="amenities">
                <span>wifi</span>
                <span>kitchen</span>
                <span>Free Parking</span>
            </div>
            <div className="sooter">
                <span class="rating">4.0 ⭐ (180 reviews)</span>
                <span class="price">$1888/night</span>
            </div>
        </div>
    </div>
</div>
<div className="standard-card">
    <div className="card-content">
        <img src="https://cdn-bnkdn.nitrocdn.com/fkQuZBjrfuGzMIhHhGqXgHnwbulOmzVH/assets/images/optimized/rev-040ff07/wp-content/uploads/2018/10/private-bedroom-vs-entire-place.jpg" alt="Bordeaux" class="card-image"/>
        <div className="text-content">
            <h4> home in Johannesburg</h4>
            <h5>Bordeaux Johanessburg</h5>
            <div className="details">
                <span>4-10 guests |  Home | 5 beds | 3 baths</span>
            </div>
            <div className="amenities">
                <span>wifi</span>
                <span>kitchen</span>
                <span>Free Parking</span>
            </div>
            <div className="sooter">
                <span class="rating">2.0 ⭐ (200 reviews)</span>
                <span class="price">$1789/night</span>
            </div>
        </div>
    </div>
</div>
    </div>

  )
}

export default Standard
 