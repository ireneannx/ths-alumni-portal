import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAuth } from '../authaction';


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
    // console.log(this.state)
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.props)

    let authData = this.state
    // console.log(authData)
    await axios.post("/auth", authData)
      .then((res) => {
        console.log('userData', res.data)
        localStorage.setItem("thsToken", res.data.token);
        this.setState({
          email: '',
          password: ''
        })
        this.props.changeAuth(res.data.user);
      })
      .catch((err) => console.log(err))

    console.log('from signin', this.state)
  }

  render() {
    console.log(this.props)
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {data : state.Auth}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuth
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);