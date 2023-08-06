import React from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_group">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo_unicalpro" />
            </Link>
          </div>
          <div className="navbar">
            <ul className="nav_list">
              <li>
                <a href="#" className="nav_link">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Xizmatlar
                </a>
              </li>
              <li>
                <a href="#" className="nav_link">
                  Bizning shifokorlar
                </a>
              </li>
            </ul>
          </div>
          <div className="header_btn">
            <a href="#">Ariza qoldirish</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
