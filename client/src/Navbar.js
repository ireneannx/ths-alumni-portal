import React from "react";
import {
  NavLink
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#323754" }}
      >
        <a className="navbar-brand white" href="#">
          THS Alumni Club
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ float: "right" }}>
            <li class="nav-item">
              <NavLink
                className="nav-link white"
                exact
                to="/jobs"
                activeClassName="active"
              >
                Jobs
                </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link white"
                exact
                to="/feeds"
                activeClassName="active"
              >
                Posts
                </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link white"
                exact
                to="/logout"
                activeClassName="active"
              >
                Logout
                {/* to do: change auth state to false, delete token from local storage and redirect */}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;