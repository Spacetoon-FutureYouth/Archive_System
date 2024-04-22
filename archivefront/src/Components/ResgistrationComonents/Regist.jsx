import React from "react";
import profImage from "../Images/profile.png";
class Register extends React.Component {
  render() {
    return (
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src={profImage} alt="IMG" />
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
            <div className="wrap-input1 validate-input department-container">
              <select className="input1" name="department">
                <option value="">Select Department</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
              </select>
              <span className="shadow-input1"></span>
            </div>
            <div className="wrap-input1 validate-input department-container">
              <select className="input1" name="jobTitle">
                <option value="">Select Job Title</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="analyst">Analyst</option>
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
  }
}

export default Register;
