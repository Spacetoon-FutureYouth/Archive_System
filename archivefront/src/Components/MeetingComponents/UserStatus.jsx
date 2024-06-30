import React from "react";
import "./tableStyel.css";

const UserTable = ({ userData }) => {
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
              <h1>Status</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.userId}>
              <td>{user.userName}</td>
              <td>
                {user.isAttended ? (
                  <span
                    className="icofont-ui-check"
                    style={{ color: "green" }}
                  ></span>
                ) : (
                  <span className="icofont-ban" style={{ color: "red" }}></span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
