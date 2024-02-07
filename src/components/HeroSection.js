// HeroSection.js
import React from 'react';
import './HeroSection.css';
import myImage from './prandeep.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="avatar-container">
          <img src={myImage} alt="Your Name" className="avatar" />
        </div>
        <div className="text-container">
          <h1 className="hero-heading">Welcome to My Portfolio</h1>
          <p className="hero-subtext">Greetings! I'm Prandeep, a proficient Software Developer based in Assam, with a specialization in ReactNative, ReactJS, Flask, PHP Laravel. </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
