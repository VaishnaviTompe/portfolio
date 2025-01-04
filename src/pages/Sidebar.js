
import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div class="logo">
          <a href="/">
          <span>V</span>aishnavi</a>
        </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <FaUser /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <FaBriefcase /> Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
