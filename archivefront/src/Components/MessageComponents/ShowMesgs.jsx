import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowMessages = () => {
  const [messages, setMessages] = useState([]); // State to store messages

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("https://localhost:7103/api/Message/GetImportMessage");
        console.log("API Response:", response.data);
        setMessages(response.data); // Update state with fetched messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages(); // Fetch messages on component mount
  }, []);

  return (
    <div className="table-container-custom" style={{ marginTop: "50px" }}>
      <table className="container-custom">
        <thead>
          <tr>
            <th className="table-header-custom">Sender Email</th>
            <th className="table-header-custom">Date Of Send</th>
            <th className="table-header-custom">Description</th>
            <th className="table-header-custom">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message.senderEmail}</td>
              <td>{message.dateOfSend}</td>
              <td>{message.discription}</td>
              <td>
                <Link to={`/ShowMessage/${index}`} className="btn" style={{ color: "white" }}>
                  Show Message
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMessages;
