import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notification";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      setNotification("Successful login!");
      setTimeout(() => {
        navigate("/listing"); // Route to StandardSearch page
      }, 1000);
    } else {
      setNotification("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      
      <form onSubmit={handleLogin}>
        <div>
        <h1>Login Page</h1>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="threebutton">Login</button>
        <button onClick={() => navigate("/register")} className="forthbutton">Register</button>
      </form>
      
      <Notification
        message={notification}
        onClose={() => setNotification("")}
      />
    </div>
  );
};

export default LoginPage;
