import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentRoleComponent = () => {
  const [enterName, setEnterName] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7103/api/Department"
        );
        console.log(response.data); // Debug: log the response data

        if (response.data.$values && Array.isArray(response.data.$values)) {
          const departments = response.data.$values.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
          setDepartmentOptions(departments);
        } else {
          console.error("No $values array found in response:", response.data);
        }
      } catch (error) {
        console.error("There was an error fetching the departments!", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleEnterNameChange = (event) => {
    setEnterName(event.target.value);
  };

  const handleAddDepartment = async () => {
    if (enterName.trim() !== "") {
      const exists = departmentOptions.some(
        (option) => option.label.toLowerCase() === enterName.toLowerCase()
      );

      if (!exists) {
        try {
          const formData = new FormData();
          formData.append("DepartmentName", enterName);

          const response = await axios.post(
            "https://localhost:7103/api/Department",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response.data); // Debug: log the response data

          const newDepartment = response.data;
          const newOption = {
            value: newDepartment.departmentId,
            label: newDepartment.departmentName,
          };
          setDepartmentOptions([...departmentOptions, newOption]);
          setEnterName("");
        } catch (error) {
          console.error("Error adding department:", error);
          alert("Error adding department. Please try again.");
        }
      } else {
        alert(`This department already exists: ${enterName}`);
      }
    } else {
      alert("Please enter a valid department name.");
    }
  };

  return (
    <div className="department-role-component-container">
      <div className="department-role-component-section">
        <div className="section-right">
          <h2 className="department-role-component-h2">Add Department</h2>
          <br />

          <select className="department-role-component-select">
            <option value="">Current Departments </option>
            {departmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <br />
        </div>
        <div className="section-left" style={{ marginLeft: "100px" }}>
          <br />
          <input
            type="text"
            placeholder="Enter Department Name"
            value={enterName}
            onChange={handleEnterNameChange}
            className="department-role-component-input"
            style={{ marginLeft: ".055px", width: "600px" }}
          />
          <br />
          <button
            className="department-role-component-button"
            onClick={handleAddDepartment}
            style={{ marginLeft: "180px" }}
          >
            Add Department
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentRoleComponent;
