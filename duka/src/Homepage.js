import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "24px", left: "-40px" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "24px", right: "-40px" }}
      onClick={onClick}
    />
  );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />, // Custom left arrow
    nextArrow: <CustomNextArrow />, // Custom right arrow

  };

  return (
    <div className="home">
      <h1>Welcome to My Duka</h1>
      <p>Your one-stop shop for networking equipment, phone, and computer accessories.</p>

      <h2>Product Categories</h2>
      <div className="categories">
        {/* Networking Equipment Category */}
        <div className="category-card">
          <h3>Networking Equipment</h3>
          <Slider {...settings}>
            <img src="/images/router.jpg" alt="Router" />
            <img src="/images/ethernet.jpg" alt="Ethernet" />
            <img src="/images/fibre.jpg" alt="fibre" />
          </Slider>
        </div>

        {/* Phone Accessories Category */}
        <div className="category-card">
          <h3>Phone Accessories</h3>
          <Slider {...settings}>
            <img src="/images/earphones.jpg" alt="earphone" />
            <img src="/images/earbuds.jpg" alt="Earbuds" />
            <img src="/images/headphones.jpg" alt="headphones" />
          </Slider>
        </div>

        {/* Computer Accessories Category */}
        <div className="category-card">
          <h3>Computer Accessories</h3>
          <Slider {...settings}>
            <img src="/images/keyboard.jpg" alt="Keyboard" />
            <img src="/images/mouse.jpg" alt="Mouse" />
            <img src="/images/drive.jpg" alt="External Drive" />
            <img src="/images/laptopcharger.jpg" alt="Laptop Charger" />
          </Slider>
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

export default Home;
