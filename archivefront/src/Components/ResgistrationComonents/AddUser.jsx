import React, { useState } from "react";

function AddUser() {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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

  return (
    <form id="msform">
      {/* progressbar */}
      <ul id="progressbar">
        <li className={step === 1 ? "active" : ""}>Account Setup</li>
        <li className={step === 2 ? "active" : ""}>Social Profiles</li>
        <li className={step === 3 ? "active" : ""}>Upload Image</li>
        <li className={step === 4 ? "active" : ""}>Personal Details</li>
      </ul>
      {/* fieldsets */}
      {step === 1 && (
        <fieldset>
          <h2 className="fs-title">Create your account</h2>
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
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
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
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && (
            <div>
              <img src={image} alt="Uploaded" className="preview-image" />
              <button onClick={cancelImage}>Cancel</button>
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
            onClick={nextStep}
            className="next action-button"
            value="Next"
          />
        </fieldset>
      )}
      {step === 4 && (
        <fieldset>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input
            type="button"
            onClick={prevStep}
            className="previous action-button"
            value="Previous"
          />
          <input
            type="submit"
            className="submit action-button"
            value="Submit"
          />
        </fieldset>
      )}
    </form>
  );
}

export default AddUser;
