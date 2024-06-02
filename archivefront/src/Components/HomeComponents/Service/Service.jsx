import React from 'react';
import ServiceItem from './ServiceItem';

function Service() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Offer Different Services To Improve Your Health</h2>
              <img src="img/section-img.png" alt="#" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <ServiceItem
            iconClass="icofont icofont-prescription"
            link="service-details.html"
            title="General Treatment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
          <ServiceItem
            iconClass="icofont icofont-tooth"
            link="service-details.html"
            title="Teeth Whitening"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
          <ServiceItem
            iconClass="icofont icofont-heart-alt"
            link="service-details.html"
            title="Heart Surgery"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
          <ServiceItem
            iconClass="icofont icofont-listening"
            link="service-details.html"
            title="Ear Treatment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
          <ServiceItem
            iconClass="icofont icofont-eye-alt"
            link="service-details.html"
            title="Vision Problems"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
          <ServiceItem
            iconClass="icofont icofont-blood"
            link="service-details.html"
            title="Blood Transfusion"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
