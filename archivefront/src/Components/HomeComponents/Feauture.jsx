import React from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
  const navigate = useNavigate();

  const handleAddUserClick = () => {
    navigate("/adduser");
  };

  const handleShowUsersClick = () => {
    navigate("/ShowUsers");
  };

  const handleEditClick = () => {
    navigate("/EditUser");
  };

  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Services</h2>
              <p>You can Send Report , Create Meeting</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="single-features" onClick={handleAddUserClick}>
              <div className="signle-icon">
                <i className="icofont icofont-ui-user"></i>
              </div>
              <h3>Add User</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-features" onClick={handleEditClick}>
              <div className="signle-icon">
                <i className="icofont icofont-edit"></i>
              </div>
              <h3>Edit/Delete User</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div
              className="single-features last"
              onClick={handleShowUsersClick}
            >
              <div className="signle-icon">
                <i className="icofont icofont-users-social"></i>
              </div>
              <h3>Show All Users</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
