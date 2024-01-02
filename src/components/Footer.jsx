import React from 'react'
import { Link } from "react-router-dom";
import '../style.css'
import '../footer.css'
function Footer() {
  return (
    <div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><Link to="/#about">about us</Link></li>
              <li><a href="#">our services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Hygienic Envrionment</a></li>
              <li><a href="#">Quality Check & feedback</a></li>
              <li><a href="#">Food Catering</a></li>
              <li><a href="#">Man-power & Personnel</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a><i className="fab fa-facebook-f"></i></a>
              <a rel="noreferrer"  target='_blank' href="https://www.instagram.com/ajin_vr_?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i></a>
              <a rel="noreferrer"  target='_blank' href="https://www.linkedin.com/in/ajin-vr"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer