import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentRoleComponent = () => {
  const [currentOption, setCurrentOption] = useState("department");
  const [currentSelection, setCurrentSelection] = useState("");
  const [enterName, setEnterName] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([
    { value: "role1", label: "Role 1" },
    { value: "role2", label: "Role 2" },
  ]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7103/api/Department"
        );

        // Check if $values array exists in the response
        if (response.data.$values && Array.isArray(response.data.$values)) {
          const departments = response.data.$values.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
          setDepartmentOptions(departments);
        } else {
          console.error("No $values array found in response:", response.data);
          // Handle the case where $values array is missing or not an array
        }
      } catch (error) {
        console.error("There was an error fetching the departments!", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleOptionChange = (event) => {
    setCurrentOption(event.target.value);
    setCurrentSelection("");
    setEnterName("");
  };

  const handleSelectionChange = (event) => {
    setCurrentSelection(event.target.value);
  };

  const handleEnterNameChange = (event) => {
    setEnterName(event.target.value);
  };

  const handleAddOption = async () => {
    if (enterName.trim() !== "") {
      const options =
        currentOption === "department" ? departmentOptions : roleOptions;
      const exists = options.some(
        (option) => option.label.toLowerCase() === enterName.toLowerCase()
      );

      if (!exists) {
        try {
          if (currentOption === "department") {
            const response = await axios.post(
              "https://localhost:7103/api/Department",
              { DepartmentName: enterName },
              { headers: { "Content-Type": "multipart/form-data" } }
            );
            const newDepartment = response.data;
            const newOption = {
              value: newDepartment.departmentId,
              label: newDepartment.departmentName,
            };
            setDepartmentOptions([...departmentOptions, newOption]);
          } else {
            const newOption = {
              value: enterName.toLowerCase(),
              label: enterName,
            };
            setRoleOptions([...roleOptions, newOption]);
          }
          setEnterName("");
        } catch (error) {
          console.error(
            `There was an error adding the ${currentOption}!`,
            error
          );
          alert(
            `There was an error adding the ${currentOption}. Please try again.`
          );
        }
      } else {
        alert(`This ${currentOption} already exists!`);
      }
    } else {
      alert(`Please enter a valid ${currentOption} name.`);
    }
  };

  return (
    <div className="department-role-component-container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "50px",
          color: "grey",
        }}
      >
        Add New{" "}
        <span
          className={`clickable-header ${
            currentOption === "department" ? "active" : ""
          }`}
          onClick={() => setCurrentOption("department")}
        >
          Department
        </span>
        /
        <span
          className={`clickable-header ${
            currentOption === "role" ? "active" : ""
          }`}
          onClick={() => setCurrentOption("role")}
        >
          Role
        </span>
      </h1>
      <div className="department-role-component-section">
        <div className="section-left" style={{ marginLeft: "100px" }}>
          <h2 className="department-role-component-h2">
            Add {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
          </h2>
          <br />
          <select
            className="department-role-component-select"
            value={currentOption}
            onChange={handleOptionChange}
          >
            <option value="department">Department</option>
            <option value="role">Role</option>
          </select>
          <br />
          <select
            className="department-role-component-select"
            value={currentSelection}
            onChange={handleSelectionChange}
          >
            <option value="">
              Current{" "}
              {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
            </option>
            {(currentOption === "department"
              ? departmentOptions
              : roleOptions
            ).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <br />
          <input
            type="text"
            placeholder={`Enter ${
              currentOption.charAt(0).toUpperCase() + currentOption.slice(1)
            }`}
            value={enterName}
            onChange={handleEnterNameChange}
            className="department-role-component-input"
          />
          <br />
          <button
            className="department-role-component-button"
            onClick={handleAddOption}
          >
            Add {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentRoleComponent;
