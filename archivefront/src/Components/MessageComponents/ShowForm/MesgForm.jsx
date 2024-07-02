import React, { useState } from "react";
import "./style.css";
import ContactForm from "./ContactForm";

function MesgForm({ userId, email }) {
  const [darkMode, setDarkMode] = useState(false);
  const [image, setImage] = useState(null);

  // Add a console.log to check userId
  console.log("UserId received in MesgForm:", userId);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <div className={`contact-container-custom ${darkMode ? "dark-mode" : ""}`}>
      <div className="left-col-custom">
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="uploaded-image"
          />
        )}
      </div>
      <div className="right-col-custom">
        <h1 className="msg-title">SendMessage</h1>
        <ContactForm
          image={image}
          onImageChange={setImage}
          userId={userId}
          email={email}
        />
      </div>
      <br />
    </div>
  );
}

export default MesgForm;
