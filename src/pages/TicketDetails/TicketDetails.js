import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './TicketDetails.css';
import { Bar, Pie } from 'react-chartjs-2'; // For bar and pie charts
import { Chart as ChartJS } from 'chart.js/auto';

const TicketDetails = () => {
  const navigate = useNavigate();

  const [ticketData, setTicketData] = useState({
    'Pushpa 2': { sold: 0, total: 50 },
    'Avatar 2': { sold: 0, total: 75 },
    'Fast X': { sold: 0, total: 100 },
    'The Batman': { sold: 0, total: 80 },
    'Spider-Man: No Way Home': { sold: 0, total: 90 },
  });

  const handleBuyTickets = (movieTitle) => {
    navigate('/ticket-details', { state: { movieTitle } });
  };

  const handleAddTicket = (movieTitle) => {
    setTicketData((prevData) => ({
      ...prevData,
      [movieTitle]: {
        ...prevData[movieTitle],
        sold: prevData[movieTitle].sold + 1,
      },
    }));
  };

  // Bar Chart Data
  const barData = {
    labels: Object.keys(ticketData),
    datasets: [
      {
        label: 'Tickets Sold',
        data: Object.values(ticketData).map((movie) => movie.sold),
        backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#9c27b0', '#f44336'],
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: Object.keys(ticketData),
    datasets: [
      {
        label: 'Tickets Breakdown',
        data: Object.values(ticketData).flatMap((movie) => [movie.sold, movie.total - movie.sold]),
        backgroundColor: ['#4caf50', '#f1f1f1', '#ff9800', '#f1f1f1', '#2196f3', '#f1f1f1', '#9c27b0', '#f1f1f1', '#f44336', '#f1f1f1'],
      },
    ],
  };

  return (
    <>
      <div className="ticket-booking-container">

        {/* Movie Trailer Section */}
        <section className="movie-trailer " >
          <h2>Movie Trailer</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YoHD9XEInc0" // Replace with the desired trailer link
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className="now-showing">
          <h2>Now Showing</h2>
          <div className="movies-container mx-auto justify-center">
            {Object.keys(ticketData).map((movieTitle) => (
              <div key={movieTitle} className="movie">
                <button
                  className="buy-tickets-btn"
                  onClick={() => handleBuyTickets(movieTitle)}
                >
                  Buy Tickets
                </button>
                <button
                  className="add-ticket-btn"
                  onClick={() => handleAddTicket(movieTitle)}
                >
                  Add Ticket
                </button>
                <p className="movie-title">{movieTitle}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="saved-tickets">
          <h2>Saved Tickets</h2>
          <div className="bar-graph-container">
            <Bar data={barData} />
          </div>
        </section>

        <section className="ticket-pie-chart">
          <h2>Ticket Breakdown</h2>
          <div className="pie-chart-container">
            <Pie data={pieData} />
          </div>
        </section>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </>
  );
};

export default TicketDetails;
