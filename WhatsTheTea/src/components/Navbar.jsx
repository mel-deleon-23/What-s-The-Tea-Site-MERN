import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>What's The Tea?</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/teas">Teas</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
