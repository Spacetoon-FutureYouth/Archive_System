import React from "react";


const CallSectionButton = ({ href, className, children }) => (
  <a href={href} className={`btn ${className}`}>
    {children}
  </a>
);

const CallSectionContent = () => (
  <div className="content">
    <h2>Do You Have Any Problems?</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      porttitor dictum turpis nec gravida.
    </p>
    <div className="button">
      <CallSectionButton href="#" className="">
        Contact Now
      </CallSectionButton>
      <CallSectionButton href="#" className="second">
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

function CallSection() {
  return (
    <section
      id="contactus"
      className="call-action overlay"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <h2>Do You Have Any Problems ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                porttitor dictum turpis nec gravida.
              </p>
              <div className="button">
                <a href="#" className="btn">
                  Contact Now
                </a>
                <a href="#" className="btn second">
                  Learn More<i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default CallSection;
