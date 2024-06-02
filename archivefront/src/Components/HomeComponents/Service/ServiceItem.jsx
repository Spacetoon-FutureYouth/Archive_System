import React from 'react';

const ServiceItem = ({ iconClass, link, title, description }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className="single-service">
      <i className={iconClass}></i>
      <h4>
        <a href={link}>{title}</a>
      </h4>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceItem;
