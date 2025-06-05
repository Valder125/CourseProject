// src/components/ui/card.js
import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
