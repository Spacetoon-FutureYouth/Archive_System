import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Capture.PNG";

const Logo = () => (
  <div className="logo">
    <Link to="/Home">
      <img
        src={logo}
        style={{ width: "150px", height: "50px", marginTop: "-5px" }}
        alt="Logo"
      />
    </Link>
  </div>
);

export default Logo;
