// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors text-sm";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      className={`${base} ${variants[variant] || ""} ${className} px-4 py-2`}
      {...props}
    >
      {children}
    </button>
  );
};