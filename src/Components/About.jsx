import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to <strong>Shelly's makeup & studio</strong>, where beauty
          meets excellence. Our mission is to bring out the best in you with our
          wide range of premium beauty products and personalized services.
        </p>
        <p className="about-text">
          Our team of experts is dedicated to providing you with the latest
          trends, innovative solutions, and exceptional customer service.
          Discover the transformative power of beauty with us today.
        </p>
      </div>
      <img
        src="https://webstockreview.net/images/beauty-clipart-transparent-1.png"
        alt="About Beauty Bliss"
        className="about-image"
      />
    </div>
  );
};

export default About;
