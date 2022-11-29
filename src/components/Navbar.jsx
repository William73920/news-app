import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsDaily
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  key="business"
                  to="/business"
                  className="nav-link "
                  aria-current="page"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/entertainment"
                  className="nav-link "
                  aria-current="page"
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/health" className="nav-link " aria-current="page">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className="nav-link " aria-current="page">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link" aria-current="page">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link" aria-current="page">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
