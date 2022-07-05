import React from "react";
import { Link } from "react-router-dom";

const LandingHeader = ({ handleLogout }) => {
  const userEmail = localStorage.getItem("userEmail");
  return (
    <>
      <div
        className="w-full h-fit bg-gray-900 backdrop-blur-md flex justify-between p-7 "
        data-testid="header"
      >
        <div className="w-max text-white">
          <p className="text-x">
            <span className="text-2xl t">Employee System </span>
          </p>
        </div>
        <div className="flex list-none w-1/2 justify-center items-center text-white cursor-pointer ">
          <li className="px-60">
            <Link
              to="viewCards"
              className="hover:text-blue-200 transition duration-300"
            >
              {userEmail !== "admin@gmail.com"
                ? "View Todos"
                : "View Employees"}
            </Link>
          </li>
        </div>
        <div className="flex list-none justify-evenly items-center">
          <li>
            <button
              onClick={handleLogout}
              className="text-white  border border-solid border-white rounded py-2.5 px-5 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
            >
              Log Out
            </button>
          </li>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
