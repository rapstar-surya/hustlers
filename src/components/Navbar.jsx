import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <img
          src="https://images.unsplash.com/photo-1587987501183-33e43fdde781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=584&q=80"
          alt="logo"
          style={{ width: "3rem", height: "3rem" }}
        />
      </Link>

      <div className="middle-part">
        <Link to="/aboutus">About Us</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to='/contactus'>Contact us</Link>
      </div>

      <div>
        <button onClick={handleLogOut} className="nav-join-btn">
          Log out
        </button>
      </div>
    </nav>
  );
}
