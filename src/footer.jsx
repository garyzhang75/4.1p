import React from "react";
import './footer.css'; // Assuming you have a CSS file for styling these sections

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
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;