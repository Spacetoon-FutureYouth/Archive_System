import React from "react";

const FormMessage = ({ message, type }) => {
  return <div id={`${type}-msg`}>{message}</div>;
};

export default FormMessage;
