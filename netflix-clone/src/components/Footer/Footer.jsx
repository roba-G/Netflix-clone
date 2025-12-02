import React from 'react'
import './footer.css'

// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-top">Questions? Call 1-844-505-2993</p>

        <div className="footer-links">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>

          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>

          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Only on Netflix</a></li>
          </ul>

          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        <div className="footer-lang">
          <select>
            <option>English</option>
            <option>Amharic</option>
          </select>
        </div>

        <p className="footer-bottom">Netflix Ethiopia</p>
      </div>
    </footer>
  );
}

export default Footer;

