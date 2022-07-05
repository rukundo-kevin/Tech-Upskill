import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Employee from "./admin/Employees";
import LandingHeader from "./Header";
import Todo from "./user/Todo";

const Dashboard = () => {
  const userEmail = localStorage.getItem("userEmail");
  const isHome = useLocation().pathname.replaceAll("/", "") === "dashboard";
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (!token) {
      return navigate("/");
    }
  });

  const handleLogout = () => {
    localStorage.getItem("AUTH_TOKEN") && localStorage.removeItem("AUTH_TOKEN");
    return navigate("/");
  };

  return (
    <>
      <LandingHeader handleLogout={handleLogout} />
      {isHome ? (
        userEmail === "admin@gmail.com" ? (
          <Employee />
        ) : (
          <Todo />
        )
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Dashboard;
