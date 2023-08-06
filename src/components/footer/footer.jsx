import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Andijon, O’zbeksiton</p>
        <div className="footer_group">
          <h4>@ 2020 TrafoHealth. All Right Researved</h4>
          <Link to={"/login-admin"}>
            <a>Admin panelga otish</a>
          </Link>
          <div className="icons">
            <a href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
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
