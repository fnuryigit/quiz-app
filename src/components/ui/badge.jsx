import React from "react";

export const Badge = ({ children, variant = "default", className = "" }) => {
  const colors = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-gray-100 text-gray-700",
    outline: "border border-gray-400 text-gray-800",
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${colors[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
