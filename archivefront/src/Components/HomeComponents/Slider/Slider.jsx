import React, { useState, useEffect } from "react";
import image1 from "../../Images/s7.jpg";
import image2 from "../../Images/s4.jpg";
import image3 from "../../Images/s6.jpg";
import "./Slider.css"; // Import your CSS file for slider styles

const Slider = () => {
  const slides = [image1, image2, image3];
  const titles = [
    "Supervised By Dr.Marghany Hassan",
    "Welcome To Archive System :)",
    "Discover Our Services!",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, 3500);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    const prev = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
  };

  return (
    <div className="slider" style={{ marginTop: "50px", position: "relative" }}>
      <button
        className="slide-button prev"
        style={{ marginTop: "-150px" }}
        onClick={prevSlide}
      >
        Prev
      </button>
      <div className="slide">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <div className="image-title">
          <p
            className="title-text"
            style={{
              marginTop: "-100px",
              fontSize: "40px",
              color: "#D78968",
            }}
          >
            {titles[currentSlide]}
          </p>
        </div>
      </div>
      <button
        className="slide-button next"
        style={{ marginTop: "-150px" }}
        onClick={nextSlide}
      >
        Next
      </button>
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "50px",
          fontSize: "50px",
          backgroundColor: "#1565",
          color: "white",
        }}
      ></h2>
    </div>
  );
};

export default Slider;
