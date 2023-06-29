import React from "react";
import { useSidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

import "./Sidebar.scss";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-visible" : ""}`}>
      <button
        type="button"
        className="navbar-hide-btn"
        onClick={() => closeSidebar()}
      >
        <ImCancelCircle size={24} />
      </button>
      <div className="side-content">
        <ul className="side-nav">Sidebar</ul>
      </div>
    </nav>
  );
};

export default Sidebar;
