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

  const handleAddDepartmentClick = () => {
    navigate("/AddDepartment");
  };

  const handleEditDepartmentClick = () => {
    navigate("/EditDepartment");
  };
  return (
    <section className="Feautes section" style={{ marginTop: "-60px" }}>
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Explore our comprehensive services:</p>
        </div>
        <div className="features-row">
          <div className="single-features" onClick={handleAddUserClick}>
            <div className="signle-icon">
              <i className="icofont icofont-ui-user"></i>
            </div>
            <h3>Add User</h3>
            <p>
              Effortlessly add new users to your system and streamline access.
            </p>
          </div>
          <div className="single-features" onClick={handleShowUsersClick}>
            <div className="signle-icon">
              <i className="icofont icofont-users-social"></i>
            </div>
            <h3>Show All Users</h3>
            <p>
              Explore all registered users at a glance for effective management.
            </p>
          </div>
          <div className="single-features" onClick={handleAddDepartmentClick}>
            <div className="signle-icon">
              <i className="icofont icofont-edit"></i>
            </div>
            <h3>Add Department</h3>
            <p>
              Integrate new departments seamlessly into your organizational
              structure.
            </p>
          </div>
          <div className="single-features" onClick={handleEditDepartmentClick}>
            <div className="signle-icon">
              <i className="icofont icofont-users-social"></i>
            </div>
            <h3>Edit Department</h3>
            <p>
              Modify department details easily to adapt to evolving
              organizational needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
