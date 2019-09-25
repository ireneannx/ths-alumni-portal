import React, { PureComponent } from "react";
import SignUpForm from "./Signup";
import SignInForm from "./Signin";
import { withRouter } from "react-router";

class StartPage extends PureComponent {
  state = {
    isClicked: false
  };

  clickButton = e => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };
  render() {
    return (
      <div>
        <div className="desktop">
          <div className="container-fluid">
            <div className="row" style={{ minHeight: "100vh" }}>
              <div className="col-6 " style={{ backgroundColor: "#163545" }}>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1
                  style={{
                    color: "#FFFFFF",
                    position: "absolute",
                    margin: "0",
                    bottom: "40px",
                    fontSize: "4vw"
                  }}
                >
                  THE HACKING SCHOOL <br></br>
                  ALUMNI PORTAL
                  <br></br>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "1.5vw",
                      fontFamily: "unsteadyOversteer"
                    }}
                  >
                    THE HACKING SCHOOL
                  </span>
                </h1>
              </div>

              <div className="col-6 App" style={{}}>
                {this.state.isClicked ? (
                  <SignUpForm clickButton={this.clickButton} />
                ) : (
                  <SignInForm clickButton={this.clickButton} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mobile">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#163545" }}
          >
            <div>
              <h1
                style={{
                  paddingTop: "40vh",
                  paddingBottom: "42vh",
                  textAlign: "center"
                }}
              >
                <span
                  style={{
                    color: "white",
                    // position: "absolute",

                    // bottom: "40px",

                    fontFamily: "unsteadyOversteer",
                    fontSize: "7vw"
                    // margin:"0 auto"
                  }}
                >
                  THE HACKING SCHOOL <br></br>
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "8vw",
                    fontFamily: "inherit"
                  }}
                >
                  ALUMNI PORTAL
                </span>
              </h1>
            </div>
            {/* <div class="parallax"></div> */}

            <div className="App login" style={{ backgroundColor: "white" }}>
              {this.state.isClicked ? (
                <SignUpForm clickButton={this.clickButton} />
              ) : (
                <SignInForm clickButton={this.clickButton} />
              )}
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StartPage);