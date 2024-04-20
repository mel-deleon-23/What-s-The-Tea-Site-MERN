import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="introduction-section">
        <h2 className="intro-heading">Welcome to What's My Tea?</h2>
        <div className="introduction-content">
          <img src="src/images/tea-and-books.jpg" alt="Introduction" className="introduction-image" />
          <p className="introduction-text">
          Welcome to What's My Tea? – where every sip tells a story and every blend is an adventure. Step into a world where aromatic flavors dance on your palate, where relaxation meets revelation, and where every cup is a journey to savor.
          At What's My Tea?, we're more than just a cafe; we're curators of flavor, enthusiasts of exploration, and purveyors of comfort. From the first pour to the last lingering sip, we craft experiences that awaken the senses and ignite the imagination.
          Join us in our cozy haven, where the aroma of freshly brewed teas mingles with the warmth of friendly conversation. Whether you're seeking a moment of tranquility, a burst of inspiration, or simply a delicious pick-me-up, What's My Tea? is your sanctuary in a bustling world.
          Indulge in our carefully curated selection of teas from around the globe, each chosen for its unique character and exceptional quality. From delicate green teas to robust black blends, herbal infusions to exotic chai, there's a brew here to suit every mood, every palate, and every occasion.
          <div>
            <br></br>
          </div>
          So, what's your tea? Join us at What's My Tea? and let's discover together.
          </p>
        </div>
      </section>
      <section className="teas-section">
        <div className="teas-container">
            <div className="tea-item">
              <img src="src/images/tea-1.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Earl Gray Tea</h3>
              <p className="tea-price">$4.99</p>
            </div>
            <div className="tea-item">
              <img src="src/images/tea-2.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Sweet Jasmine Tea</h3>
              <p className="tea-price">$5.99</p>
            </div>
            <div className="tea-item">
              <img src="src/images/tea-3.jpg" className="tea-image" alt="Tea" />
              <h3 className="tea-name">Green Tea</h3>
              <p className="tea-price">$3.99</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
