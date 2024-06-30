import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    image: null,
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    phoneNumber: "",
    gender: "",
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  const cancelImage = () => {
    setFormData({
      ...formData,
      image: null,
    });
    setImagePreviewUrl("");
  };

  const submit = async () => {
    if (formData.image) {
      const imageData = new FormData();
      imageData.append("file", formData.image);

      try {
        const imageResponse = await axios.post(
          "https://localhost:7103/api/Admin/AddProfileImage",
          imageData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { fileName } = imageResponse.data;
        const userData = new FormData();
        userData.append("Image", fileName);
        userData.append("Email", formData.email);
        userData.append("Password", formData.password);
        userData.append("ConfirmPassword", formData.confirmPassword);
        userData.append("UserName", formData.username);
        userData.append("Gender", formData.gender);
        userData.append("PhoneNumber", formData.phoneNumber);

        const userResponse = await axios.post(
          "https://localhost:7103/api/Admin",
          userData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(userResponse.data);
        navigate("/ShowUsers");
      } catch (error) {
        console.error(error);
      }
    } else {
      const userData = new FormData();
      userData.append("Image", formData.image);
      userData.append("Email", formData.email);
      userData.append("Password", formData.password);
      userData.append("ConfirmPassword", formData.confirmPassword);
      userData.append("UserName", formData.username);
      userData.append("Gender", formData.gender);
      userData.append("PhoneNumber", formData.phoneNumber);

      try {
        const userResponse = await axios.post(
          "https://localhost:7103/api/Admin",
          userData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(userResponse.data);
        navigate("/ShowUsers");
      } catch (error) {
        console.error(error);
      }
    }
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
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
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
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <br />
          <br />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
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
            <option value="">Select Gender ▼</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
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
          {imagePreviewUrl && (
            <div>
              <img
                src={imagePreviewUrl}
                alt="Uploaded"
                className="preview-image"
              />
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
