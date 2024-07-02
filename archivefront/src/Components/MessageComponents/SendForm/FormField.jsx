import React from "react";

const FormField = ({ label, type, id, name, placeholder, rows }) => {
  return (
    <>
      <label className="msg-label" htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="msg-textarea"
          rows={rows}
          id={id}
          name={name}
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          className="msg-input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
};

export default FormField;
