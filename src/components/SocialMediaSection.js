// SocialMediaSection.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './SocialMediaSection.css'; // Create this CSS file for additional styling

const SocialMediaSection = () => {
  return (
    <div className="social-media-section">
      <h2>Follow Me on Social Media</h2>
      <div className="social-icons">
        <a href="www.linkedin.com/in/prandeep-chutia-5aa061228" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/prandeep10" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/prandeep10" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
