import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../components/App";
import { Signup } from "../components/Auth";
import Login from "../components/Auth/Login";
import Dashboard from "../components/Dashboard";

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default AllRoutes;
