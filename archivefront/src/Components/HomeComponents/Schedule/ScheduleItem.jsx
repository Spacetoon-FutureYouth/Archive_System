import React from "react";

const ScheduleItem = ({
  iconClass,
  spanText,
  title,
  description,
  children,
}) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div
      className={`single-schedule ${spanText.toLowerCase().replace(" ", "-")}`}
    >
      <div className="inner">
        <div className="icon">
          <i className={iconClass}></i>
        </div>
        <div className="single-content">
          <span>{spanText}</span>
          <h4>{title}</h4>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default ScheduleItem;
