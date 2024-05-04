import React from "react";
import importimg from "../Images/Import.svg";
function Feature() {
  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Feautures</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-envelope-open "></i>
              </div>
              <h3>Import Messages</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-ui-message "></i>
              </div>
              <h3>Export Messages</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-features last">
              <div className="signle-icon">
                <i className="icofont icofont-meeting-add"></i>
              </div>
              <h3>Create Meeting</h3> {/**add Send Message */}
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
