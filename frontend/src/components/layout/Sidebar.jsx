import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaGasPump,
  FaOilCan,
  FaMoneyBillWave,
  FaUsers,
  FaFileAlt,
  FaCog,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa";

import "../../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-circle">⛽</div>
        <div>
          <h2>Fuel Station AI</h2>
          <span>Management System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/pumps"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaGasPump />
          <span>Pumps</span>
        </NavLink>

        <NavLink
          to="/tanks"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaOilCan />
          <span>Tanks</span>
        </NavLink>

        <NavLink
          to="/sales"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaMoneyBillWave />
          <span>Sales</span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaFileAlt />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/ai"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaRobot />
          <span>AI Prediction</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Footer */}
      <div className="sidebar-footer">

        <button className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}