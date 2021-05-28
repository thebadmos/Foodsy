import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-right">
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-github"></i>
        </a>
      </div>
      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="/">
            Home
          </a>

          <a href="/recipes">Recipes</a>
        </p>

        <p>Foodsy &copy; 2021. Design by MijMij.</p>
      </div>
    </div>
  );
};

export default Footer;
