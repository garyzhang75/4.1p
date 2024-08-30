import React from "react";
import './footer.css'; // Assuming you have a CSS file for styling these sections
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/tutorials">Tutorials</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/help">Help Center</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Stay Connected</h3>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;