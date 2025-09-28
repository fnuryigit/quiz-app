// src/components/ui/progress.jsx
import React from "react";

export const Progress = ({ value, className }) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="bg-blue-500 h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
