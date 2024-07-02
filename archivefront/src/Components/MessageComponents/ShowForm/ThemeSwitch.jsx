import React from "react";

const ThemeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-switch-wrapper-msg">
      <label className="theme-switch-msg" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleDarkMode} />
        <div className="slider-msg round custom-slider"></div>
      </label>
      <div className="description-msg">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>
    </div>
  );
};

export default ThemeSwitch;
