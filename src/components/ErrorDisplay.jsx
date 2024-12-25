import React from "react";

const ErrorDisplay = ({ message, isDarkMode }) => {
  return <div className={`my-4 text-center ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>{message}</div>;
};

export default ErrorDisplay;