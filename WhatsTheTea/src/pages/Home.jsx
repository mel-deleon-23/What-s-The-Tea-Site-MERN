import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="introduction-section">
        <div className="introduction-content">
          <img src="src/images/tea-and-books.jpg" alt="Introduction" className="introduction-image" />
          <p className="introduction-text">Introduction text goes here...</p>
        </div>
      </section>
      <section className="teas-section">
        <div className="teas-container">
            <div className="tea-item">
              <img src="src/images/tea-and-books.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Earl Gray Tea</h3>
              <p className="tea-price">$4.99</p>
            </div>
            <div className="tea-item">
              <img src="src/images/tea-and-books.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Sweet Jasmine Tea</h3>
              <p className="tea-price">$5.99</p>
            </div>
            <div className="tea-item">
              <img src="src/images/tea-and-books.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Green Tea</h3>
              <p className="tea-price">$3.99</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
