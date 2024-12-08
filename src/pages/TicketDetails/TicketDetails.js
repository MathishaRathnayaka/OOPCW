import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Nav';
import React from 'react';
import './TicketDetails'

const TicketDetails = () => {
  const navigate = useNavigate();

  const handleBuyTickets = (movieTitle) => {
    navigate('/ticket-details', { state: { movieTitle } }); // Navigate with state
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="ticket-booking-container">
        <section className="now-showing">
          <h2>Now Showing</h2>
          <div className="movies-container mx-auto justify-center">
            <div className="movie">
              <button
                className="buy-tickets-btn"
                onClick={() => handleBuyTickets('Pushpa 2')}
              >
                Buy Tickets
              </button>
              <p className="movie-title">Pushpa 2</p>
            </div>
            <div className="movie">
              <button
                className="buy-tickets-btn"
                onClick={() => handleBuyTickets('Avatar 2')}
              >
                Buy Tickets
              </button>
              <p className="movie-title">Avatar 2</p>
            </div>
            <div className="movie">
              <button
                className="buy-tickets-btn"
                onClick={() => handleBuyTickets('Fast X')}
              >
                Buy Tickets
              </button>
              <p className="movie-title">Fast X</p>
            </div>
            <div className="movie">
              <button
                className="buy-tickets-btn"
                onClick={() => handleBuyTickets('The Batman')}
              >
                Buy Tickets
              </button>
              <p className="movie-title">The Batman</p>
            </div>
            <div className="movie">
              <button
                className="buy-tickets-btn"
                onClick={() => handleBuyTickets('Spider-Man: No Way Home')}
              >
                Buy Tickets
              </button>
              <p className="movie-title">Spider-Man: No Way Home</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TicketDetails;
