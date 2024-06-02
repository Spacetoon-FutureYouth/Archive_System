import React from "react";

const SectionTitle = ({ title, description }) => (
  <div className="section-title">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeatureItem = ({ iconClass, title, description }) => (
  <div className="col-lg-4 col-12">
    <div className="single-features">
      <div className="single-icon">
        <i className={iconClass}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Feature = () => (
  <section className="Features section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle
            title="Features"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
          />
        </div>
      </div>
      <div className="row">
        <FeatureItem
          iconClass="icofont icofont-envelope-open"
          title="Import Messages"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        <FeatureItem
          iconClass="icofont icofont-ui-message"
          title="Export Messages"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        <FeatureItem
          iconClass="icofont icofont-meeting-add"
          title="Meetings Schedule"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        
      </div>
    </div>
  </section>
);

export default Feature;
