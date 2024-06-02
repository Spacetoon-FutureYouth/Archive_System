import React from "react";
import "./tableStyel.css";

const Table = () => {
  const handleEditClick = () => {};

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
          <tr>
            <td>User1</td>
            <td>
              <span
                className="icofont-ui-check"
                style={{ color: "green" }}
              ></span>
            </td>
          </tr>
          <tr>
            <td>User2</td>
            <td>
              <span className="icofont-ban" style={{ color: "red" }}></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
