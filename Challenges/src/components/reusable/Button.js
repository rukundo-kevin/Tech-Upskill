import React from "react";

const Button = ({ children, onClick, customClass }) => {
  return (
    <button
      className={`relative w-16 flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
