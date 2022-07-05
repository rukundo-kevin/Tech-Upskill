import React from "react";
import { Link } from "react-router-dom";

export const FormExtra = ({ linkText, linkUrl }) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="text-sm">
        <Link
          to={linkUrl}
          className="font-medium text-cyan-600 hover:text-cyan-500"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
