import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate from react-router-dom

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Admin", {
          headers: {
            accept: "*/*",
          },
        });
        console.log("API Response:", response.data);
        setUsers(response.data.$values);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="table-container-custom" style={{ marginTop: "50px" }}>
      <table className="container-custom">
        <thead>
          <tr>
            <th className="table-header-custom">Username</th>
            <th className="table-header-custom">Email</th>
            <th className="table-header-custom">Phone Number</th>
            <th className="table-header-custom">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Link className="btn" to={`/EditUser/${user.userId}`}>
                  Edit
                </Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
