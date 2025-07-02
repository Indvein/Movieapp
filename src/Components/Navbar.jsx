import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleReset = () => {
    if (location.pathname === "/") {
      // Already on home, just reload Home component
      navigate(0); // soft refresh
    } else {
      navigate("/"); // go to home
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Clicking on Movie App logo triggers reset */}
        <span onClick={handleReset} style={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}>
          Movie App
        </span>
      </div>
      <div className="navbar-links">
        <span onClick={handleReset} className="nav-link" style={{ cursor: "pointer" }}>
          Home
        </span>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
