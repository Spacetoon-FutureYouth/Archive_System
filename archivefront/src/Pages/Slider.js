import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Pages/a2.png";
import img2 from "../Pages/a2.png";
import img3 from "../Pages/a2.png";

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Slider 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={img2} alt="Slider 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={img3} alt="Slider 3" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
}
