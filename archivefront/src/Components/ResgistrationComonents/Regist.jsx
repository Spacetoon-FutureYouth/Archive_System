import React, { useState } from "react";
import profImage from "../Images/profile.png";
import maleImage from "../Images/male.png";
import femaleImage from "../Images/female.png";

const Register = () => {
  const [gender, setGender] = useState(""); // State to store the selected gender

  // Function to handle gender selection
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Function to get the appropriate profile image based on the selected gender
  const getProfileImage = () => {
    if (gender === "male") {
      return maleImage;
    } else if (gender === "female") {
      return femaleImage;
    } else {
      return profImage;
    }
  };

  console.log("Chosen gender:", gender);

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={getProfileImage()} alt="Profile" />
        </div>

        <form className="contact1-form validate-form">
          <span className="contact1-form-title">Sign Up</span>

          <div
            className="wrap-input1 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Phone number is required"
          >
            <input
              className="input1"
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Password is required"
          >
            <input
              className="input1"
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className="wrap-input1 validate-input"
            data-validate="Confirm Password is required"
          >
            <input
              className="input1"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <span className="shadow-input1"></span>
          </div>

          {/* Hidden Department Select */}
          <label htmlFor="hiddenDepartment" style={{ display: "none" }}>
            Hidden Department:
          </label>
          <select
            className="input1"
            name="department"
            id="hiddenDepartment"
            style={{ display: "none" }}
          >
            <option value="">Select Department</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
          </select>

          <div className="wrap-input1 department-container">
            <select className="input1" name="jobTitle">
              <option value="">Select Job Title</option>
              <option value="manager">Manager</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="analyst">Analyst</option>
            </select>
            <span className="shadow-input1"></span>
          </div>
          <br />
          <div className="wrap-input1 validate-input department-container">
            <select
              className="input1"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Submit
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
