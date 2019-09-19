import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeAuthValue } from "./Login-Signup Frontend/authaction";
import { withRouter } from 'react-router'
import history from './history'

class Navbar extends React.PureComponent {
  onClick = e => {
    e.preventDefault();
    /**
     *! set isAuth field in Redux store to false
     *! clear the thsToken value pair in localStorage
     ** redirect to the Sign in page
     */
    console.log("while logging out", this.props)
    this.props.changeAuthValue()
    localStorage.removeItem('thsToken');
    localStorage.removeItem('redux_localstorage_simple');
    history.push('/')
  }

  render() {
    //console.log("From Navbar", this.props.data.user.id)
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#323754" }}
        >
          <a className="navbar-brand white">THS Alumni Club</a>
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
              <li className="nav-item">
                <NavLink
                  className="nav-link white"
                  exact
                  to="/jobs"
                  activeClassName="active"
                >
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link white"
                  exact
                  to="/posts"
                  activeClassName="active"
                >
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <NavLink
                  className="nav-link white"
                  exact
                  to={{ pathname: `/profile/${this.props.data.user._id}` }}
                  activeClassName="active"
                >
                  Profile
                </NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink to="/">
                  <button
                    onClick={e => this.onClick(e)}
                    className="btn btn-primary"
                    style={{ background: "transparent" }}
                  >
                    Logout
                </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.Auth.authData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeAuthValue
    },
    dispatch
  );

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
