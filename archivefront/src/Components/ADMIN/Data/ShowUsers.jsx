import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./style.css"; // Import the CSS file

const Table = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Admin", {
          headers: {
            accept: "*/*",
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (userId) => {
    navigate(`/EditUser/${userId}`); // Navigate to EditUser path with userId
  };

  const handleDeleteClick = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    // Add your delete logic here
  };

  return (
    <div className="table-container-custom">
      <br />
      <br />
      <table className="container-custom">
        <thead>
          <tr>
            <th className="table-header-custom">
              <h1>User name</h1>
            </th>
            <th className="table-header-custom">
              <h1>Email</h1>
            </th>
            <th className="table-header-custom">
              <h1>Phone number</h1>
            </th>
            <th className="table-header-custom">
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button onClick={() => handleEditClick(user.userId)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(user.userId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
