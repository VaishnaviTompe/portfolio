
// import React from 'react';
// import './Sidebar.css';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//     <div class="logo">
//           <a href="/">
//           <span>V</span>aishnavi</a>
//         </div>
//       <ul>
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? 'link active' : 'link')}
//           >
//             <FaHome /> Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) => (isActive ? 'link active' : 'link')}
//           >
//             <FaUser /> About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/portfolio"
//             className={({ isActive }) => (isActive ? 'link active' : 'link')}
//           >
//             <FaBriefcase /> Portfolio
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? 'link active' : 'link')}
//           >
//             <FaEnvelope /> Contact
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <a href="/">
            <span>V</span>aishnavi
          </a>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              onClick={toggleSidebar} // Close sidebar after link click
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              onClick={toggleSidebar} // Close sidebar after link click
            >
              <FaUser /> About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              onClick={toggleSidebar} // Close sidebar after link click
            >
              <FaBriefcase /> Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
              onClick={toggleSidebar} // Close sidebar after link click
            >
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
