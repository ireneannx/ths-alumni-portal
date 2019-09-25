import React from 'react';
import './App.css';
import UserApp from './UserApp'
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './Login-Signup Frontend/components/StartPage'
import { changeAuth } from './Login-Signup Frontend/authaction'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//auth components


function App() {
  return (
    <div>
      <React.Fragment>

        <Switch>

          <Route exact path="/" component={SignUpForm} />
        
          <Route path="/user" component={UserApp} />

          
        </Switch>
      </React.Fragment>



    </div>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuth
}, dispatch)

export default connect(mapDispatchToProps)(App);
