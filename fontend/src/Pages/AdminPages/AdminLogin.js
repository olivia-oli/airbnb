import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notification";

const AdminLogin = () => {
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
                setEmail(""); // Clear email field
                setPassword(""); // Clear password field
                navigate("/Standard"); // Route to StandardSearch page
            }, 1000);
        } else {
            setNotification("Invalid credentials. Please try again.");
            // Optionally clear password field on failure
            setPassword("");
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <h1>Admin Only</h1>
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
            </form>
            <Notification
                message={notification}
                onClose={() => setNotification("")}
            />
        </div>
    );
};

export default AdminLogin;