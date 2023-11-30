import React from 'react'
import './footer.css';

export default function footer() {
  return (
    <footer className="footer">
      <h1>Fins n' tails</h1>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="/about-us">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/returns">Returns and Cancellations</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <ul>
          <a>hello@finsntails.fi</a>
          <a>(123) 456 7890</a>
        </ul>
      </div>
    </footer>
      )
}
