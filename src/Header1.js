import React from 'react';
//import './Header.css'; // Assuming you have a CSS file for Header styles

function Header() {
  return (
    <header>
      <div className="container">
        <h1>MainFlow Internship Program</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
