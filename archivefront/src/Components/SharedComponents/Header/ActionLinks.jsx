import React from "react";
import { Link } from "react-router-dom";

const ActionLinks = () => (
  <div className="get-quote" style={{ display: "flex", justifyContent: "flex-end" }}>
    <Link to="/SendMessage" className="btn" style={{ marginRight: "10px" }}>
      Send Message
    </Link>
    <Link to="/createmeeting" className="btn" style={{ marginRight: "10px" }}>
      Create Meeting
    </Link>
  </div>
);

export default ActionLinks;
