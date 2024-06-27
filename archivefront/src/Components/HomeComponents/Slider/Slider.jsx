import React from "react";
import SliderItem from "./SliderItem";

function Slider() {
  return (
    <>
      {/* Slider Area */}
      <section className="slider">
        <div className="hero-slider">
          <SliderItem
            backgroundImage="img/slider2.jpg"
            title={
              <>
                <span>Medical</span> Services That You Can <span>Trust!</span>
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam."
            primaryBtnText="Get Appointment"
            primaryBtnLink="#"
            secondaryBtnText="Learn More"
            secondaryBtnLink="#"
          />
          <SliderItem
            backgroundImage="img/slider.jpg"
            title={
              <>
                <span>Medical</span> Services That You Can <span>Trust!</span>
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam."
            primaryBtnText="Get Appointment"
            primaryBtnLink="#"
            secondaryBtnText="About Us"
            secondaryBtnLink="#"
          />
          <SliderItem
            backgroundImage="img/slider3.jpg"
            title={
              <>
                <span>Medical</span> Services That You Can <span>Trust!</span>
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam."
            primaryBtnText="Get Appointment"
            primaryBtnLink="#"
            secondaryBtnText="Contact Now"
            secondaryBtnLink="#"
          />
        </div>
      </section>
      {/*/ End Slider Area */}
    </>
  );
}

export default Slider;
