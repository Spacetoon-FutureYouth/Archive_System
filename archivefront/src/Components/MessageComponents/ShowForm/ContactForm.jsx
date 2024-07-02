import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import FormMessage from "./FormMesg";
import axios from "axios";

const ContactForm = ({ image, onImageChange, userId, email }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [emailOptions, setEmailOptions] = useState([]);
  const [formData, setFormData] = useState({
    recipientEmails: [],
    image: null, // Initialize image in formData
  });
  const [showEmails, setShowEmails] = useState(false);

  useEffect(() => {
    fetchActiveUserEmails();
  }, []);

  const fetchActiveUserEmails = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7103/api/Message/GetActiveUserEmails"
      );
      // Filter out the current user's email from the options
      const filteredEmails = response.data.$values.filter(
        (option) => option !== email
      );
      setEmailOptions(filteredEmails); // Set filtered emails array to state
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  const addEmail = () => {
    if (selectedEmail) {
      if (!formData.recipientEmails.includes(selectedEmail)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          recipientEmails: [...prevFormData.recipientEmails, selectedEmail],
        }));
        setSelectedEmail("");
      } else {
        alert("Email already added");
      }
    }
  };

  const removeEmail = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      recipientEmails: prevFormData.recipientEmails.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const validate = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;

    if (formData.recipientEmails.length === 0) {
      setError("Please select at least one recipient.");
      return;
    }

    try {
      let imageFileName = ""; // Initialize without a default value

      if (formData.image) {
        const imageData = new FormData();
        imageData.append("file", formData.image);

        const imageResponse = await axios.post(
          "https://localhost:7103/api/Admin/AddProfileImage",
          imageData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imageFileName = imageResponse.data.fileName; // Update imageFileName with the uploaded image name
        console.log("Image file name is: " + email); // Log the image file name here
      }

      const requestBody = {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        discription: message,
        recipientEmails: formData.recipientEmails,
        image: imageFileName, // Use the dynamically fetched image file name here
      };

      const sendMessageResponse = await axios.post(
        "https://localhost:7103/api/Message/SendMessage",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (sendMessageResponse.status === 200) {
        setSuccess("Message sent successfully.");
        setTimeout(() => {
          setSuccess("");
          e.target.reset();
          setFormData({ recipientEmails: [], image: null }); // Reset image in formData
          onImageChange(null);
        }, 6000);
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      if (error.response) {
        console.error("SendMessage API Error:", error.response.data);
        setError(
          `Error sending message: ${JSON.stringify(error.response.data.errors)}`
        );
      } else {
        console.error("Network error:", error.message);
        setError(`Network error: ${error.message}`);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: file, // Update formData with selected file
      }));
      onImageChange(file); // Notify parent component of image change
    }
  };

  return (
    <form
      id="contact-form"
      className="msg-form"
      method="post"
      onSubmit={validate}
    >
      <FormField
        label="Message"
        type="textarea"
        id="message"
        name="message"
        placeholder="Your Message"
        rows="3"
      />

      <button
        type="button"
        onClick={() => document.getElementById("image-input").click()}
        style={{ cursor: "pointer", marginBottom: "1rem" }}
        className="btn"
      >
        Upload Image
      </button>
      <input
        type="file"
        id="image-input"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <label
        className="msg-label"
        htmlFor="email"
        style={{ marginTop: "30px" }}
      >
        Choose Recipients
      </label>

      <select
        className="msg-input"
        id="email"
        name="email"
        value={selectedEmail}
        onChange={handleEmailChange}
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        <option value="">Select Email ▼</option>
        {emailOptions.map((email) => (
          <option key={email} value={email}>
            {email}
          </option>
        ))}
      </select>

      <button type="button" onClick={addEmail} style={{ cursor: "pointer" }}>
        ➕ Add Email
      </button>
      <button
        type="button"
        onClick={() => setShowEmails(!showEmails)}
        style={{ cursor: "pointer", marginTop: "10px", width: "500px" }}
      >
        {showEmails ? "Hide Emails" : "Show Emails"}
      </button>
      {showEmails && (
        <ul>
          {formData.recipientEmails.map((email, index) => (
            <li
              key={index}
              onClick={() => removeEmail(index)}
              style={{ cursor: "pointer", color: "red" }}
            >
              {email}
            </li>
          ))}
        </ul>
      )}

      <button
        className="msg-button"
        type="submit"
        id="submit"
        name="submit"
        style={{ marginTop: "50px" }}
      >
        Send
      </button>
      {error && <FormMessage message={error} type="error" />}
      {success && <FormMessage message={success} type="success" />}
    </form>
  );
};

export default ContactForm;
