import React from 'react';

const FunFactItem = ({ iconClass, counter, description }) => (
  <div className="col-lg-3 col-md-6 col-12">
    <div className="single-fun">
      <i className={iconClass}></i>
      <div className="content">
        <span className="counter">{counter}</span>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const FunFacts = () => (
  <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <FunFactItem
          iconClass="icofont icofont-home"
          counter="3468"
          description="Hospital Rooms"
        />
        <FunFactItem
          iconClass="icofont icofont-user-alt-3"
          counter="557"
          description="Specialist Doctors"
        />
        <FunFactItem
          iconClass="icofont-simple-smile"
          counter="4379"
          description="Happy Patients"
        />
        <FunFactItem
          iconClass="icofont icofont-table"
          counter="32"
          description="Years of Experience"
        />
      </div>
    </div>
  </div>
);

export default FunFacts;
