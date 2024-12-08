import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/loginPage'; 
import MainDashBoard from './pages/MainDashBoard/MainDashBoard';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';
import AboutUs from './pages/aboutus/AboutUs';
import TicketDetails from './pages/TicketDetails/TicketDetails'; // Import TicketDetails page
import Navbar from './pages/Navbar/Nav';

function App() {
  return (
    <Router>
      {/* Include the Navbar on all pages */}
      <Navbar />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} /> {/* Login Page */}
        <Route path="/" element={<MainDashBoard />} /> {/* Main Dashboard */}
        <Route path="/registration" element={<RegistrationForm />} /> {/* Registration Form */}
        <Route path="/about" element={<AboutUs />} /> {/* About Us */}
        <Route path="/ticketdetails/:movieId" element={<TicketDetails />} /> {/* Ticket Details */}
      </Routes>
    </Router>
  );
}

export default App;
