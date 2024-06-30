import React, { useState, useEffect } from "react";
import axios from "axios";

const EditDepRole = () => {
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

        let departments = [];
        if (Array.isArray(response.data)) {
          // If response.data is already an array, use it directly
          departments = response.data.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
        } else if (
          response.data.$values &&
          Array.isArray(response.data.$values)
        ) {
          // If response.data.$values exists and is an array, use it
          departments = response.data.$values.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
        } else {
          console.error("No valid array found in response:", response.data);
          // Handle the case where neither response.data nor response.data.$values is an array
        }

        setDepartmentOptions(departments);
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
    setEnterName(""); // Clear the input field when changing selection
  };

  const handleEnterNameChange = (event) => {
    setEnterName(event.target.value);
  };

  const handleEditOption = async () => {
    if (enterName.trim() !== "") {
      try {
        if (currentOption === "department") {
          if (currentSelection.trim() !== "") {
            // Edit department
            const departmentId = currentSelection;
            const response = await axios.put(
              `https://localhost:7103/api/Department/${departmentId}`,
              { DepartmentName: enterName },
              { headers: { "Content-Type": "multipart/form-data" } }
            );
            const updatedDepartment = response.data;
            const updatedDepartmentOption = {
              value: updatedDepartment.departmentId,
              label: updatedDepartment.departmentName,
            };
            const updatedDepartments = departmentOptions.map((dept) =>
              dept.value === updatedDepartmentOption.value
                ? updatedDepartmentOption
                : dept
            );
            setDepartmentOptions(updatedDepartments);
            setCurrentSelection(""); // Clear current selection after edit
            setEnterName(""); // Clear input field after edit
            alert(`Department edited successfully!`);
          } else {
            alert("Please select a department to edit.");
          }
        } else {
          // Edit role option (if needed)
          // This block is for roles, add logic if required
        }
      } catch (error) {
        console.error(
          `There was an error editing the ${currentOption}!`,
          error
        );
        alert(
          `There was an error editing the ${currentOption}. Please try again.`
        );
      }
    } else {
      alert(`Please enter a valid ${currentOption} name.`);
    }
  };

  const handleDeleteOption = async () => {
    if (currentSelection.trim() === "") {
      alert(`Please select a ${currentOption} before deleting.`);
      return;
    }

    if (currentOption === "department") {
      try {
        const departmentId = currentSelection;
        await axios.delete(
          `https://localhost:7103/api/Department/${departmentId}`
        );

        // Fetch updated departments after deletion
        const response = await axios.get(
          "https://localhost:7103/api/Department"
        );

        // Ensure response.data is an array or extract the array from the response
        let updatedDepartments = [];
        if (Array.isArray(response.data)) {
          updatedDepartments = response.data.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
        } else if (
          response.data.$values &&
          Array.isArray(response.data.$values)
        ) {
          updatedDepartments = response.data.$values.map((department) => ({
            value: department.departmentId,
            label: department.departmentName,
          }));
        } else {
          console.error("Unexpected response structure:", response.data);
          // Handle unexpected structure, such as logging an error or setting a default value
        }

        // Update departmentOptions state with the updated data
        setDepartmentOptions(updatedDepartments);

        setCurrentSelection(""); // Clear current selection after deletion
        setEnterName(""); // Clear input field after deletion
        alert(`Department deleted successfully!`);
      } catch (error) {
        console.error(`There was an error deleting the department!`, error);
        alert(`There was an error deleting the department. Please try again.`);
      }
    } else {
      // Delete role option (if needed)
      const updatedRoleOptions = roleOptions.filter(
        (option) => option.value !== currentSelection
      );
      setRoleOptions(updatedRoleOptions);

      setCurrentSelection(""); // Clear current selection after deletion
      alert(`Role deleted!`);
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
        Edit{" "}
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
            Edit{" "}
            {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
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
            onClick={handleEditOption}
          >
            Edit{" "}
            {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
          </button>
          <button
            className="department-role-component-button"
            onClick={handleDeleteOption}
          >
            Delete{" "}
            {currentOption.charAt(0).toUpperCase() + currentOption.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDepRole;
