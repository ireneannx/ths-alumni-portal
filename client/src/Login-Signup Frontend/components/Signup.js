import React from 'react';
import axios from 'axios';


class SignUpForm extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
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
    let authData = this.state

    if (this.state.password === this.state.password2) {
      await axios.post('/user/register', authData)
        .then(() => {
          console.log('success')
          this.setState({
            name: '',
            email: '',
            password: '',
            password2: ''
          })
        })
    } else {
      console.log("passwords don't match")
    }
    console.log(this.state)
  }


  render() {
    return (

      <div class="container" >
        <div class="col-md-6 mx-auto text-center">
          <div class="header-title">
          </div>
        </div>
        <div class="row">
          <div style={{ margin: "30% auto auto auto" }}>
            <h1 style={{ marginBottom: '50px' }}>Create <br />an Account</h1>
            <div class="col-md-4 mx-auto" >

              <div class="myform form " >

                <form action="" method="post" name="login" style={{ minWidth: '150%' }} onSubmit={(e) => this.handleSubmit(e)}>
                  <div class="form-group">
                    <input type="text" name="name" class="form-control my-input" id="name" placeholder="Name" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" class="form-control my-input" placeholder="Password" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="form-group">
                    <input type="password" name="password2" class="form-control my-input" placeholder="Confirm Password" onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div class="text-center ">
                    <button type="submit" class=" btn btn-primary btn-block send-button tx-tfm">Create Account</button>
                  </div>

                  <div class="col-md-12 ">
                    <div class="login-or">
                      <hr class="hr-or" />
                    </div>
                  </div>
                  <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                  </p>
                  <p> Already have an account? <br/> <button className="btn btn-primary btn-sm" onClick={this.props.clickButton}>Login</button></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SignUpForm