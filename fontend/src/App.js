import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import GiftCard from "./components/GiftCard/GiftCard";
import Question from "./components/Question/Question";
import Gataway from "./components/Gataway/Gataway";
import Footer from "./components/Footer/Footer";
import Listing from "./Pages/Listing/Listing";
import Reservation from "./StandardSearch/Reservation";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Register from "./Pages/LoginPage/Register";
import CreateListing from "./Pages/Listing/CreateListing";
import ViewListings from "./Pages/Listing/ViewListings";
import NotFound from "./components/NotFound"; // Ensure this component exists
import Standard from "./StandardSearch/Standard";
import AdminLogin from "./Pages/AdminPages/AdminLogin";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <><Header /><Home /><Experience /><GiftCard /><Question /><Gataway /><Footer /></>
          } />
          <Route path="/listing" element={<Listing />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/view-listings" element={<ViewListings />} />
          <Route path="/Standard" element={<Standard/>}/>
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
