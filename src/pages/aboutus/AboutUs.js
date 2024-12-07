import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <p>
          Welcome to our Ticket Booking Platform! Our mission is to simplify the process of finding and booking tickets for movies, events, and shows. Whether you're a client looking for the latest movies or a vendor managing your events, we've got you covered.
        </p>
        <p>
          Our platform provides:
        </p>
        <ul>
          <li>Easy-to-use ticket booking for clients.</li>
          <li>Comprehensive tools for vendors to manage shows.</li>
          <li>Real-time updates on availability and schedules.</li>
        </ul>
        <p>
          We are committed to delivering a seamless experience for everyone. Join us and be part of our growing community!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
