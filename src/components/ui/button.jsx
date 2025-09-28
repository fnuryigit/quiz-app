import React from "react";

export const Button = ({ children, className = "", onClick, variant }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
};
