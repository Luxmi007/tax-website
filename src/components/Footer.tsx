import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: harishsharma0093@gmail.com</p>
          <p>Phone: 093553-34999</p>
          <p>Landline: 0161-4626752</p>
          <p>
            Address: Plot No.81/2, First Floor, Office No. 1,3 & 4, Industrial Area-A Extn., Ludhiana-141003
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h2>&copy; 2025 Vashisth Tax Consultancy. All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
