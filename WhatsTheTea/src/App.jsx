import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home'; // Import the Home page

function App() {
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
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Home /> {/* Render the Home component */}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
