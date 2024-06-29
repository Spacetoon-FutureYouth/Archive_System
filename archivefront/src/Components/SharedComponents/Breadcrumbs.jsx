import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ currentPage }) {
  const getBreadcrumbName = () => {
    switch (currentPage) {
      case "addUser":
        return "Add User";
      case "createmeeting":
        return "Create Meeting";
      case "showusers":
        return "Show Users";
      case "contactus":
        return "Contact US";
      case "adddepart":
        return "Add Deparment/Role";
      case "editUser":
        return "Edit User";
      default:
        return "Unknown Page";
    }
  };

  return (
    <>
      <br />
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>{getBreadcrumbName()}</h2>
                <ul className="bread-list">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <i className="icofont-simple-right"></i>
                  </li>
                  <li className="active">{getBreadcrumbName()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumbs;
