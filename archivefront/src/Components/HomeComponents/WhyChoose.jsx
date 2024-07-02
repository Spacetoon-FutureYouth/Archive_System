import React from "react";

function WhyChoose() {
  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Why Choose the Archive System?</h2>
              <img src="img/section-img.png" alt="Section Image" />
              <p>
                The Archive System offers innovative solutions to modernize your
                communication processes. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. It streamlines the exchange of information,
                reports, letters, and other essential documents, replacing
                outdated methods with a user-friendly digital interface.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <h3>Who We Are</h3>
              <p>
                We are committed to transforming traditional paper-based
                communication into efficient digital processes. Our system
                empowers organizations to securely send and receive vital
                documents, enhancing operational efficiency and promoting
                environmental sustainability.
              </p>
              <p>
                With a focus on user-friendly interfaces and robust features, we
                facilitate seamless transitions from paper to digital
                communication, ensuring faster access to information and
                improved collaboration.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>Streamlined document
                      exchange
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>User-friendly
                      interfaces
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Enhanced
                      collaboration
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li>
                      <i className="fa fa-caret-right"></i>Improved operational
                      efficiency
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Reduced environmental
                      impact
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>Secure document
                      handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
