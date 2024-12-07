import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/loginPage'; // Fixed the path case
import MainDashBoard from './pages/MainDashBoard/MainDashBoard';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';
import AboutUs from './pages/aboutus/AboutUs';
import Navbar from './pages/Navbar/Nav';


function App() {
  return (
    <Router>
      
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<LoginPage />} /> {/* Default Login Page route */}
        <Route path="/dashboard" element={<MainDashBoard />} /> {/* Main Dashboard route */}
        <Route path="/registration" element={<RegistrationForm />} /> {/* Registration Form route */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
        
      </Routes>
    </Router>
  );
}

export default App;
