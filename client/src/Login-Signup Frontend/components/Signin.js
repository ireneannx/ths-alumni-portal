import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAuth } from '../authaction';
import { withRouter } from 'react-router'
import '../../App.css'

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
    // console.log('from handle submit', this.props)
    await this.props.changeAuth(authData, this.props.history)

  }

  componentWillUnmount() {
    this.setState({
      email: '',
      password: ''
    })
  }


  render() {
    return (
      <div className="container center">

        <div className="row center margin">
          <div className="center">

            <h1 style={{ marginBottom: '50px', marginTop: "5%" }} className="center font">Login to your<br /> account</h1>
            <div className="col-md-8 mx-auto" >

              <div className="myform form center" >
                <form action="" method="post" name="login" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control my-input" id="email" placeholder="Email" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" className="form-control my-input" placeholder="password" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="text-center ">
                    <button type="submit" className=" btn btn-primary btn-block send-button tx-tfm">Login</button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                    </div>
                  </div>
                  <p className="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="https://www.website.com/terms-and-conditions/" className="ps-hero__content__link">Terms of Use</a> and <a href="https://policies.google.com/">Privacy Policy</a>.
                              </p>
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
  return { data: state.Auth }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuth
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
