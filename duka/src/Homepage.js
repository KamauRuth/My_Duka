import React from "react";
import { Link } from "react-router-dom";
// import './style.css';


const Homepage = () => {
  return (
      <div className="home">
        <h1>Welcome to My Duka</h1>
        <p>Your one-stop shop for networking equipment, phone, and computer accessories.</p>
  
        <h2>Product Categories</h2>
        <div className="categories">
          <div className="category-card">
            <h3>Networking Equipment</h3>
            <p>Routers, Switches, Cables, and more.</p>
          </div>
          <div className="category-card">
            <h3>Phone Accessories</h3>
            <p>Chargers, Earphones, Cases, and more.</p>
          </div>
          <div className="category-card">
            <h3>Computer Accessories</h3>
            <p>Keyboards, Mice, External Drives, and more.</p>
          </div>
        </div>
  
        {/* Footer Section */}
        <footer className="footer">
          <h2>Contact Us</h2>
          <p>Email: support@myduka.com</p>
          <p>Phone: +254 700 123456</p>
          <p>📍 Location: Nairobi, Kenya</p>
        </footer>
      </div>
    );
  };


export default Homepage;
