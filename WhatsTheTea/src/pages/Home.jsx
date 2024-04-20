import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [teas, setTeas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/api/teas')
      .then(response => {
        setTeas(response.data);
      })
      .catch(error => {
        console.error('Error fetching teas:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <section className="introduction-section">
        <div className="introduction-content">
          <img src="your_image_url" alt="Introduction" />
          <p>Introduction text goes here...</p>
        </div>
      </section>
      <section className="teas-section">
        <div className="teas-container">
          {teas.map(tea => (
            <div key={tea._id} className="tea-item">
              <img src={tea.image} alt={tea.name} />
              <h3>{tea.name}</h3>
              <p>{tea.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
