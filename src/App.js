import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/loginPage'; 
import MainDashBoard from './pages/MainDashBoard/MainDashBoard';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';
import AboutUs from './pages/aboutus/AboutUs';

import TicketDetails from './pages/TicketDetails/TicketDetails';
import Navbar from './pages/Navbar/Nav';
import Contact from './pages/contact/contact';

function App() {
  return (
   <main className='w-screen h-screen'>
     <Router>
      {/* Include the Navbar on all pages */}
      <Navbar />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} /> {/* Login Page */}
        <Route path="/" element={<MainDashBoard />} /> {/* Main Dashboard */}
        <Route path="/registration" element={<RegistrationForm />} /> {/* Registration Form */}
        <Route path="/about" element={<AboutUs />} /> {/* About Us */}
        <Route path="/ticketdetails/:movieId" element={<TicketDetails />} /> {/* Ticket Details */}
        <Route path='/contact' element={<Contact/>} /> 
      </Routes>
    </Router>
   </main>
  );
}

export default App;
