import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../components/Login';
import WhoPage from '../components/Who';
import Todo from '../Todo';

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/about" element={<WhoPage />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  </Router>
);

export default AllRoutes;
