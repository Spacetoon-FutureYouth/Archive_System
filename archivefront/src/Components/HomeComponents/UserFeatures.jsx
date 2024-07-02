import React from "react";
import { useNavigate } from "react-router-dom";

function UserFeature() {
  const navigate = useNavigate();

  const handleAddUserClick = () => {
    navigate("/adduser");
  };

  const handleShowUsersClick = () => {
    navigate("/ShowUsers");
  };

  const handleShowAllMeetingsClick = () => {
    navigate("/ShowMeetings");
  };

  return (
    <section className="Feautes section" style={{ marginTop: "-60px" }}>
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>You can Send Report, Create Meeting</p>
        </div>
        <div className="features-row">
          <div className="single-features" onClick={handleAddUserClick}>
            <div className="signle-icon">
              <i className="icofont icofont-ui-user"></i>
            </div>
            <h3>Import Messages</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          <div className="single-features" onClick={handleShowUsersClick}>
            <div className="signle-icon">
              <i className="icofont icofont-users-social"></i>
            </div>
            <h3>Export Messages</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
          <div className="single-features" onClick={handleShowAllMeetingsClick}>
            <div className="signle-icon">
              <i className="icofont icofont-edit"></i>
            </div>
            <h3>Show All Meetings</h3>
            <p>
              Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
              vulputate.
            </p>
          </div>
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "50px",
          fontSize: "50px",
          backgroundColor: "#1565",
          color: "white",
        }}
      >
        Meetings Coming Soon!
      </h2>
    </section>
  );
}

export default UserFeature;
