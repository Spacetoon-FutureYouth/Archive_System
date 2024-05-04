import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs overlay">
      <div className="container">
        <div className="bread-inner">
          <div className="row">
            <div className="col-12">
              <h2>Add User</h2>
              <ul className="bread-list">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <i className="icofont-simple-right"></i>
                </li>
                <li className="active">Add User</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
