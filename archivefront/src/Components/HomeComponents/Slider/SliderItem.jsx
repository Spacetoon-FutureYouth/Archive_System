import React from 'react';

const SliderItem = ({ backgroundImage, title, description, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => (
  <div className="single-slider" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="text">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="button">
              <a href={primaryBtnLink} className="btn">{primaryBtnText}</a>
              <a href={secondaryBtnLink} className="btn primary">{secondaryBtnText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SliderItem;
