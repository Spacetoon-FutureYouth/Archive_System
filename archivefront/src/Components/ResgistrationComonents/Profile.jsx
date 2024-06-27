import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../Images/user-profile.png";

const ProfileSettings = ({ userId }) => {
  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    department: "",
    userRole: "",
    gender: "",
    birthDate: "2000-01-01",
    password: "",
    confirmPassword: "",
  });

  const [editable, setEditable] = useState(false); // State to manage edit mode

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7103/api/admin/${userId}`
        );
        const user = response.data;
        setUserData({
          userName: user.username || "",
          phoneNumber: user.phoneNumber || "",
          userRole: user.userRole || "",
          department: user.department || "",
          email: user.email || "",
          gender:
            user.gender === 0 ? "male" : user.gender === 1 ? "female" : "",
          birthDate: user.birthDate || "2000-01-01", // Use default value if none is provided
          password: user.password || "",
          confirmPassword: user.password || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("UserName", userData.userName);
      formData.append("PhoneNumber", userData.phoneNumber);
      formData.append("Email", userData.email);
      formData.append("Password", userData.password);
      formData.append("ConfirmPassword", userData.confirmPassword);
      formData.append("Gender", userData.gender === "male" ? 0 : 1);
      formData.append("Image", "638550274751679650.png"); // Replace with actual image file if needed

      const response = await axios.put(
        `https://localhost:7103/api/admin/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Changes saved successfully!");
      } else {
        alert("Failed to save changes.");
      }
      setEditable(false); // Exit edit mode after saving
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes.");
    }
  };

  const toggleEditMode = () => {
    setEditable(!editable); // Toggle edit mode
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src={img}
              className="rounded-circle mt-5"
              width="150px"
              alt="Profile Pic"
            />
            <span className="font-weight-bold">{userData.userName}</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
              <button
                className="btn btn-primary profile-button"
                type="button"
                onClick={toggleEditMode}
              >
                {editable ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  value={userData.userName}
                  onChange={handleInputChange}
                  readOnly={!editable}
                  placeholder="User Name"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Birth Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthDate"
                  value={userData.birthDate}
                  onChange={handleInputChange}
                  readOnly={!editable}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleInputChange}
                  readOnly={!editable}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  value={userData.gender}
                  onChange={handleInputChange}
                  disabled={!editable}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="labels">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  readOnly={!editable}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Department</label>
                <select
                  className="form-control"
                  name="department"
                  value={userData.department}
                  readOnly={true} // Always read-only
                >
                  <option value="">Select Department</option>
                  <option value="dept1">Department 1</option>
                  <option value="dept2">Department 2</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="labels">User Role</label>
                <select
                  className="form-control"
                  name="userRole"
                  value={userData.userRole}
                  readOnly={true} // Always read-only
                >
                  <option value="">Select User Role</option>
                  <option value="role1">Role 1</option>
                  <option value="role2">Role 2</option>
                </select>
              </div>
            </div>
            <div className="mt-5 text-center">
              {editable && (
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
