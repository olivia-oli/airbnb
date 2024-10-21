import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import './ListingDetailPage.css';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import PetsIcon from '@mui/icons-material/Pets';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MicOffIcon from '@mui/icons-material/MicOff';
import Co2Icon from '@mui/icons-material/Co2';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import GavelIcon from '@mui/icons-material/Gavel';

const ListingDetailPage = () => {
    const comments = [
        {
            name: "John Doe",
            date: "October 1, 2024",
            text: "Great place! Would highly recommend.",
            photo: "data:image/jpeg;base64,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"
        },
        {
            name: "Jane Smith",
            date: "October 2, 2024",
            text: "Had a wonderful stay, very cozy.",
            photo: "data:image/jpeg;base64,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"
        },
        {
            name: "Alice Johnson",
            date: "October 3, 2024",
            text: "The location is perfect! easy access to restaurants and the subway,cosy studio apartment with a super comfortable bed.Great host super helpful and responsive.cool murphy bed",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlXpGqv4GMBAL9MITzQQlrK8tFM3nt3RQZG_wDeK2VEKmQAHTbOjtiXg&s"
        },
        {
            name: "Bob Brown",
            date: "October 4, 2024",
            text: "Friendly host and clean space.",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_FrX8ScLHeTmPKwPEMWiMg6TuTlbogJ9eF6PpGvfa4edW3O7ZW_FCVE&s"
        },
        {
            name: "Charlie White",
            date: "October 5, 2024",
            text: "Amazing experience, will come back! it has everything one needs for a monthly business stay. Very clean and organized place.Amazing hospitality afforable price",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGB-BURgJjhUzG7k164GLo213yWP8o2ZUPybdsB2yShH6gOKg3rpPiR4&s"
        },
        {
            name: "Diana Green",
            date: "October 6, 2024",
            text: "Everything was perfect!",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFCMSR3OnsGbYcMJXRTpaSqstsqTkVVSYcv5UOkN13-crTYr3NzCjMNY&s"
        }
    ];
   
    const options = [
        ['Paris', 'Nice', 'Lyon'],
        ['Marseille', 'Lille', 'Aix-en-Provence'],
        ['Rouen', 'Amiens', 'Toulouse'],
        ['Montpellier', 'Dijon', 'Grenoble'],
    ];

   const uniqueStaysData = [
        ['Beach House Rentals', 'Camper Rentals'],
        ['Glamping Rentals', 'Treehouse Rentals'],
        ['Cabin Rentals', 'Tiny House Rentals'],
        ['Lakehouse Rentals', 'Mountain Chalet Rentals'],
    ];
    return (
       <div>
          <span>⭐ 5.0 . 7 reviews  </span>
         <div className="reviews-container">
          <div className="rating-reviews">
            <h4>cleanliness</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">5.0</span>
          </div>
          <div className="rating-reviews">
          <h4>Communication</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">5.0</span>
          </div>
          <div className="rating-reviews">
            <h4>Check-in</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">5.0</span>
          </div>
          <div className="rating-reviews">
            <h4>Accuracy</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">5.0</span>
          </div>
          <div className="rating-reviews">
            <h4>Location</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">4.9</span>
          </div>
          <div className="rating-reviews">
            <h4>Value</h4>
            <div className="rating-line" style={{ width: '100px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', marginRight: '10px' }}>
              <div className="filled" style={{ height: '100%', width: '100%', backgroundColor: 'black', borderRadius: '5px' }}></div>
            </div>
            <span className="reviews">4.9</span>
          </div>
         </div>
         <div className="comments-section">
            <p>Here’s what our guests are saying:</p>
            <div className="comments-container">
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <img src={comment.photo} alt={comment.name} className="comment-photo" />
                        <div className="comment-info">
                            <h5>{comment.name}</h5>
                            <span>{comment.date}</span>
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
                <button>show all 12 reviews</button>
            </div>
         </div>
         <div className="host-info">
            <img 
                src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"alt="person"
                
                alt="Hosted by Olivia" 
                className="host-photo" 
            />
            <h4>Hosted by Olivia</h4>
            <span className="host-date">October 15, 2024</span>
            <div className="host-icons">
                <StarOutlineIcon className="icon" />
                <span>7 Reviews</span>
                <VerifiedUserIcon className="icon" />
                <span>Identity Verified</span>
                <SupervisedUserCircleIcon className="icon" />
                <span>Superhost</span>
            </div>
            <p className="superhost-description">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </p>
            <div className="response-info">
                <span>Response Rate: 100%</span>
                <span>Response Time: Within an hour</span>
            </div>
            <button className="contact-button">Contact Host</button>
        </div>
        <h1>Things to know</h1>
        <div className="policy-container">
            <div className="policy-section">
                <h4>House Rules</h4>
                <ul>
                    <li> <SmokeFreeIcon/> No smoking</li>
                    <li><PetsIcon />No pets</li>
                    <li><AccessTimeIcon/>Check-in after 4 PM</li>
                    <li><AccessTimeIcon/>Check-out by 10 AM</li>
                    <li><CelebrationIcon />No parties or events</li>
                    <li><Diversity3Icon />Respect the neighbors</li>
                    <li><MicOffIcon/>Keep noise to a minimum</li>
                </ul>
            </div>
            <div className="policy-section">
                <h4>Health & Safety</h4>
                <ul>
                    <li><Co2Icon/>Carbon monoxide alarm</li>
                    <li><SmokingRoomsIcon/>Smoke alarm</li>
                    <li><CleaningServicesIcon/>Enhanced cleaning process</li>
                    <li><AccessTimeIcon/>Self check-in</li>
                    <li><CleanHandsIcon/>Hand sanitizer available</li>
                </ul>
                <span className="show-more">Show more</span>
            </div>
            <div className="policy-section">
                <h4><GavelIcon/>Cancellation Policy</h4>
                <ul>
                    <li>Free cancellation before Feb 14</li>
                </ul>
                <span className="show-more">Show more</span>
            </div>
        </div>
        <h1>Explore other options in France</h1>
        <div className="options-container">
            <div className="grid">
                {options.map((column, index) => (
                    <div className="column" key={index}>
                        {column.map((item, i) => (
                            <div className="item" key={i}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>  
        </div>
        <h1>Unique Stays on Airbnb</h1>
        <div className="unique-stays-container">
            <div className="grid">
                {uniqueStaysData.map((column, index) => (
                    <div className="column" key={index}>
                        {column.map((item, i) => (
                            <div className="item" key={i}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="breadcrumb">
                <span>Airbnb ></span>
                <span> Europe ></span>
                <span> France ></span>
                <span> Bordeaux</span>
            </div>
        </div>
    </div>
    );
};

// Example usage
export default ListingDetailPage;

