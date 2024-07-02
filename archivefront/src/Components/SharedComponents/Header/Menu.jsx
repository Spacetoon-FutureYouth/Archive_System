import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ username, handleLogout }) => (
  <div className="main-menu">
    <nav className="navigation">
      <ul className="nav menu">
        <li className="active">
          <Link to="/Home">
            Home <i className="icofont-rounded-down"></i>
          </Link>
          <ul className="dropdown">
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
        <li>
          <a href="#">
            Pages <i className="icofont-rounded-down"></i>
          </a>
          <ul className="dropdown">
            <li>
              <Link to="/SendMessage">Send Message</Link>
            </li>
            <li>
              <Link to="/createmeeting">Create Meeting</Link>
            </li>
            <li>
              <a href="404.html">404 Error</a>
            </li>
            <li>
              <a href="404.html">404 Error</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            {username} <i className="icofont-rounded-down"></i>
          </a>
          <ul className="dropdown">
            <li>
              <Link to="/Profile">View Profile</Link>
            </li>
            <li onClick={handleLogout}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
