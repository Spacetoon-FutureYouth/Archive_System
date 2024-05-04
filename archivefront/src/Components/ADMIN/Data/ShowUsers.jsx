import React from "react";
import "./style.css"; // Import the CSS file

const Table = () => {
  return (
    <div className="table-container-custom">
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
              <h1>Job title</h1>
            </th>
            <th className="table-header-custom">
              <h1>Department</h1>
            </th>
            <th className="table-header-custom">
              <h1>Mobile number</h1>
            </th>
            <th className="table-header-custom">
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User1</td>
            <td>user1@example.com</td>
            <td>Developer</td>
            <td>Engineering</td>
            <td>123-456-7890</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>User2</td>
            <td>user2@example.com</td>
            <td>Designer</td>
            <td>Design</td>
            <td>987-654-3210</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
