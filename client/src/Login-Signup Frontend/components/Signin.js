import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAuth } from '../authaction';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import jwt_decode from 'jwt-decode'

class SignInForm extends React.PureComponent {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    e.preventDefault()

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault()

    let authData = this.state
    if (authData.email != '' && authData.password != "") {
      await axios.post("/auth", authData)
        .then((res) => {
          console.log('userData', res.data)
          const decode = jwt_decode(res.data.token)
          localStorage.setItem("thsToken", res.data.token);
          this.setState({
            email: '',
            password: ''
          })

          this.props.changeAuth(decode.user);
        })
        .catch((err) => console.log(err.response))

      this.props.history.push('/user/posts')
    }
    else {
      console.log("blah")
    }
  }



  render() {
    return (
      <div class="container">
        <div class="col-md-6 mx-auto text-center">
          <div class="header-title">
          </div>
        </div>
        <div class="row">
          <div style={{ margin: "30% auto auto auto" }}>
            <h1 style={{ marginBottom: '50px' }}>Login to your<br /> account</h1>
            <div class="col-md-4 mx-auto" >

              <div class="myform form " >

                <form action="" method="post" name="login" style={{ minWidth: '150%' }} onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-group">
                    <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" class="form-control my-input" placeholder="password" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="text-center ">
                    <button type="submit" class=" btn btn-primary btn-block send-button tx-tfm">Login</button>
                  </div>
                  <div class="col-md-12 ">
                    <div class="login-or">
                      <hr class="hr-or" />
                    </div>
                  </div>
                  <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                              </p>
                  <p> Dont have an account? <br /> <button className="btn btn-primary btn-sm" onClick={this.props.clickButton}>Register</button></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }

}
const mapStateToProps = (state) => {
  return { data: state.Auth }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuth
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));


  // return !this.props.data.isLoggedIn ?
  //   (
  //     <div class="container">
  //       <div class="col-md-6 mx-auto text-center">
  //         <div class="header-title">
  //         </div>
  //       </div>
  //       <div class="row">
  //         <div style={{ margin: "30% auto auto auto" }}>
  //           <h1 style={{ marginBottom: '50px' }}>Login to your<br /> account</h1>
  //           <div class="col-md-4 mx-auto" >

  //             <div class="myform form " >

  //               <form action="" method="post" name="login" style={{ minWidth: '150%' }} onSubmit={(e) => this.handleSubmit(e)}>
  //                 <div className="form-group">
  //                   <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" onChange={(e) => this.handleChange(e)} />
  //                 </div>
  //                 <div class="form-group">
  //                   <input type="password" name="password" class="form-control my-input" placeholder="password" onChange={(e) => this.handleChange(e)} />
  //                 </div>
  //                 <div class="text-center ">
  //                   <button type="submit" class=" btn btn-primary btn-block send-button tx-tfm">Login</button>
  //                 </div>
  //                 <div class="col-md-12 ">
  //                   <div class="login-or">
  //                     <hr class="hr-or" />
  //                   </div>
  //                 </div>
  //                 <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
  //                           </p>
  //                 <p> Dont have an account? <br /> <button className="btn btn-primary btn-sm" onClick={this.props.clickButton}>Register</button></p>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   ) :
  //   (<Redirect to="/user/jobs"></Redirect>)
