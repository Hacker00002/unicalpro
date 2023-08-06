import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Andijon, O'zbekiston</p>
        <div className="footer_group">
          <h4>© 2023 ArtMedical. Barcha huquqlar himoyalangan</h4>
          <Link to={"/login-admin"}>
            <a>Admin panelga o'tish</a>
          </Link>
          <div className="icons">
            <a href="https://t.me/ArtMedical_uz">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/artmedical_uz">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
