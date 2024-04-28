import React, { useState } from "react";

function AddUser() {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const submit = () => {};

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const cancelImage = () => {
    setImage(null);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <form id="msform">
      {/* progressbar */}
      <ul id="progressbar">
        <li
          className={step === 1 ? "active" : ""}
          onClick={() => goToStep(1)}
          style={{ cursor: "pointer" }}
        >
          Account Setup
        </li>
        <li
          className={step === 2 ? "active" : ""}
          onClick={() => goToStep(2)}
          style={{ cursor: "pointer" }}
        >
          Social Profiles
        </li>
        <li
          className={step === 3 ? "active" : ""}
          onClick={() => goToStep(3)}
          style={{ cursor: "pointer" }}
        >
          Upload Image
        </li>
      </ul>
      {/* fieldsets */}
      {step === 1 && (
        <fieldset>
          <h2 className="fs-title">Create your account</h2>
          <input type="text" name="username" placeholder="User Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <input
            type="button"
            onClick={nextStep}
            className="next action-button"
            value="Next"
          />
        </fieldset>
      )}
      {step === 2 && (
        <fieldset>
          <h2 className="fs-title">More Details</h2>
          <input type="text" name="phone" placeholder="Phone Number" />
          <br /> <br />
          <select
            id="department"
            name="department"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              fontSize: "16px",
              color: "gray",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              textAlign: "left",
            }}
          >
            <option value="">Select Department ▼</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="finance">Finance</option>
            {/* Add more options as needed */}
          </select>
          <br />
          <br />
          <select
            id="job"
            name="job"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              fontSize: "16px",
              color: "gray",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              textAlign: "left",
            }}
          >
            <option value="">Select Job Title ▼</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            {/* Add more options as needed */}
          </select>
          <br />
          <br />
          <select
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              fontSize: "16px",
              color: "gray",
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
              textAlign: "left", // Align the dropdown to the left
            }}
          >
            <option value="">Select Gender ▼</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
          <input
            type="button"
            onClick={prevStep}
            className="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            onClick={nextStep}
            className="next action-button"
            value="Next"
          />
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <h2 className="fs-title">Upload Image</h2>
          <h3 className="fs-subtitle">Please upload your profile image</h3>
          <label htmlFor="upload" style={{ cursor: "pointer" }}>
            Upload Image{" "}
            <span role="img" aria-label="up-arrow">
              ⬆️
            </span>
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {image && (
            <div>
              <img src={image} alt="Uploaded" className="preview-image" />
              <br />
              <br />
              <button
                onClick={cancelImage}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          )}
          <input
            type="button"
            onClick={prevStep}
            className="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            onClick={submit}
            className="next action-button"
            value="Submit"
          />
        </fieldset>
      )}
    </form>
  );
}

export default AddUser;
