import React from 'react';


const SignUpForm = (props) => {

  return (

    <div class="container">
      <div class="col-md-6 mx-auto text-center">
        <div class="header-title">
        </div>
      </div>
      <div class="row">
        <div style={{ margin: "30% auto auto auto" }}>
          <h1 style={{ marginBottom: '50px' }}>Create <br />an Account</h1>
          <div class="col-md-4 mx-auto" >

            <div class="myform form " >

              <form action="" method="post" name="login" style={{ minWidth: '120%' }}>
                <div class="form-group">
                  <input type="text" name="name" class="form-control my-input" id="name" placeholder="Name" />
                </div>
                <div class="form-group">
                  <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" />
                </div>
                <div class="form-group">
                  <input name="phone" id="phone" class="form-control my-input" placeholder="Phone" />
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
                <p> Already have an account? <button onClick={props.clickButton}>Login</button></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUpForm