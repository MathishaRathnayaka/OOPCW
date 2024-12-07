import React, { useState } from 'react';
import './loginPage.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiPasswordDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { GrView } from "react-icons/gr";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    console.log(password, username);

    // Example login logic (replace with real authentication)
    if (password === "aaa" && username === "aaa") {
      navigate('/dashboard'); // Navigate to the home page after login
    } else {
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="input-group">
          <MdOutlineMarkEmailRead className="icon" />
          <input
            type="text"
            placeholder="Enter your username"
            className="input-field"
            value={username}
            onChange={(e) => setUserName(e.target.value)} // Corrected state update
            required
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          {/* <PiPasswordBold className="icon" /> */}
          <PiPasswordDuotone />
          <input
            type={showPassword ? "text" : "password"}
            placeholder=" Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Corrected state update
            required
          />
          <GrView />

          {/* <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button> */}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Login
        </button>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <a href="/reset-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
