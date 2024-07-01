import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Admin");
        console.log("API Response:", response.data);
        // Ensure response.data.$values is an array before setting users state
        if (Array.isArray(response.data.$values)) {
          setUsers(response.data.$values);
        } else {
          console.error(
            "API did not return an array in $values:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const onClickDeleteButton = async (userId) => {
    try {
      await axios.delete(`https://localhost:7103/api/Admin/${userId}`);
      console.log("User deleted successfully.");

      // Update state after deletion
      setUsers((prevUsers) => {
        return prevUsers.map((user) => {
          if (user.userId === userId) {
            return { ...user, userState: 1 }; // Change userState to "Deleted"
          }
          return user;
        });
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="table-container-custom" style={{ marginTop: "50px" }}>
      <table className="container-custom">
        <thead>
          <tr>
            <th className="table-header-custom">Username</th>
            <th className="table-header-custom">Email</th>
            <th className="table-header-custom">Phone Number</th>
            <th className="table-header-custom">State</th>
            <th className="table-header-custom">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.userState === 0 ? "Active" : "Deleted"}</td>
              <td>
                <Link
                  className={`btn ${user.userState === 1 ? "disabled" : ""}`}
                  to={user.userState === 1 ? "#" : `/EditUser/${user.userId}`}
                  onClick={(e) => {
                    if (user.userState === 1) {
                      e.preventDefault();
                    }
                  }}
                  style={{ color: "white" }}
                >
                  Edit
                </Link>
                {user.userState === 0 ? ( // Render delete button only if user is active
                  <button
                    onClick={() => onClickDeleteButton(user.userId)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    className="btn"
                    style={{
                      pointerEvents: "none", // Disable pointer events for deleted users
                      opacity: "0.6", // Reduce opacity for deleted users
                    }}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
