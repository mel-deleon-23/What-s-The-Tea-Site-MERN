import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

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
        <ul>
          {teas.map(tea => (
            <li key={tea._id}>{tea.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
