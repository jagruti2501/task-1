import React from 'react';


function Header() {
  return (
    <header>
      
      <div className="menu-button">
        <button className="hamburger">&#9776;</button>
      </div>
      <div className="top-buttons">
        <button className="link-button">Solutions</button>
        <button className="link-button">Pricing</button>
        <button className="link-button">Support</button>
      </div>
      <div className="top-right-buttons">
        <button className="link-button">Login</button>
        <button className="link-button">Signup</button>
      </div>
    </header>
  );
}

export default Header;
