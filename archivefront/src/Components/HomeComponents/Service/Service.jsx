import React from "react";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem"; // Assuming ServiceItem component is defined

const Service = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Offer Various Services for Managing Archives</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ServiceItem
            iconClass="icofont-speed-meter"
            link="/service-details"
            title="Efficiency and Productivity"
            description="Improve the overall efficiency and productivity of professors and their assistants by streamlining the communication process, reducing administrative overhead, and minimizing the time and effort required for document exchange."
          />
          <ServiceItem
            iconClass="icofont icofont-prescription"
            link="/service-details"
            title="Document Management"
            description="Implement a robust document management system within the project to ensure secure storage, retrieval, and archival of important documents, such as reports, assignments, and administrative forms."
          />
          <ServiceItem
            iconClass="icofont-share"
            link="/service-details"
            title="Multiple Recipient Support"
            description="Enable the system to facilitate communication not only between professors and their assistants but also with multiple recipients within the faculty system, allowing for broader and more collaborative exchanges."
          />
          <ServiceItem
            iconClass="icofont-lock"
            link="/service-details"
            title="Security and Privacy"
            description="Ensure the security and privacy of sensitive academic information by implementing robust data encryption and access controls, adhering to data protection regulations."
          />

          <ServiceItem
            iconClass="icofont icofont-support"
            link="/service-details"
            title="Training and Support"
            description="Provide comprehensive training and ongoing support to professors and assistants to ensure a smooth transition from paper-based communication to the new digital system."
          />

          <ServiceItem
            iconClass="icofont-money-bag"
            link="/service-details"
            title="Cost Efficiency"
            description="Evaluate and manage the cost implications of implementing the system to ensure that it provides a cost-effective alternative to paper-based communication."
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
