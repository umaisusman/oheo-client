import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          <span style={{ color: "#6b52ae" }}>O</span>heo
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tribe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                What’s new
              </a>
            </li>
          </ul>

          {/* Login & Button */}
          <div className="d-flex align-items-center">
            <a className="nav-link me-3" href="#">
              Log in
            </a>
            <a className="btn btn-outline-dark rounded-pill px-4" href="#">
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
