import React from "react";
import { Link } from "react-router-dom";

const CallSectionButton = ({ to, className, children }) => (
  <Link to={to} className={`btn ${className}`}>
    {children}
  </Link>
);

const CallSectionContent = () => (
  <div className="content">
    <h2>Do You Have Any Problems?</h2>
    <p>Our team is ready to assist you with any challenges you may face.</p>
    <div className="button">
      <CallSectionButton to="/ContactUs" className="">
        Contact Now
      </CallSectionButton>
      <CallSectionButton to="#" className="second">
        Learn More<i className="fa fa-long-arrow-right"></i>
      </CallSectionButton>
    </div>
  </div>
);

const CallSection = () => (
  <section
    id="contactus"
    className="call-action overlay"
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <CallSectionContent />
        </div>
      </div>
    </div>
  </section>
);

export default CallSection;
