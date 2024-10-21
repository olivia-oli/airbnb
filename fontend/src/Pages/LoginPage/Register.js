import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/Notification/Notification';
import "./LoginPage";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (email && password) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      
      setNotification('Registration successful! You can now log in.');
      setTimeout(() => {
        navigate('/Login'); // Redirect to login page after registration
      }, 2000);
    } else {
      setNotification('Please fill in all fields.');
    }
  };

  return (
    <div>
      
      <form onSubmit={handleRegister}>
        <div>
        <h1>Register Page</h1>
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
        <button type="submit" className="threebutton">Register</button>
      </form>
      <Notification message={notification} onClose={() => setNotification('')} />
    </div>
  );
};

export default Register;
