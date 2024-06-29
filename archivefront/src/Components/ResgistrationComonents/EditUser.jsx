import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit() {
  const { userId } = useParams();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7103/api/Admin/${userId}`
        );
        setUserData(response.data);

        // Fetch user image separately
        const imageResponse = await axios.get(
          `https://localhost:7103/api/Admin/${userId}/image`,
          { responseType: "arraybuffer" }
        );
        const imageBlob = new Blob([imageResponse.data]);
        setImage(URL.createObjectURL(imageBlob));

        setGender(response.data.gender.toString()); // Convert gender to string if necessary
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const submit = async () => {
    try {
      let imageFileName = userData.image; // Use existing image if no new image is uploaded

      // If there's a new image, upload it
      if (image && document.querySelector("#upload").files[0]) {
        const imageFile = document.querySelector("#upload").files[0]; // Get the file from the input

        const imageFormData = new FormData();
        imageFormData.append("file", imageFile);

        // Log the form data content
        for (let pair of imageFormData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }

        const imageResponse = await axios.post(
          "https://localhost:7103/api/Admin/AddProfileImage",
          imageFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imageFileName = imageResponse.data.fileName; // Update the image file name if upload is successful
      }

      const formData = new FormData();
      formData.append("Image", imageFileName); // Append the image file name
      formData.append("Email", userData.email);
      formData.append("Password", userData.password);
      formData.append("ConfirmPassword", userData.password); // Assuming ConfirmPassword is the same as Password
      formData.append("UserName", userData.username);
      formData.append("Gender", gender);
      formData.append("PhoneNumber", userData.phoneNumber);

      // Print form data for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.put(
        `https://localhost:7103/api/Admin/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Update successful:", response.data);
      // Optionally, you can redirect or show a success message after successful update
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error cases, show error message, etc.
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
            value={userData.username || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userData.email || ""}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password || ""}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword || ""}
            onChange={handleInputChange}
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
            value={userData.phoneNumber || ""}
            onChange={handleInputChange}
          />
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
            value={userData.department || ""}
            onChange={handleInputChange}
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
            value={userData.job || ""}
            onChange={handleInputChange}
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

export default Edit;
