import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './UserProfile/Profile';
import UserApp from './UserApp'

import LoggedIn from './Pages/LoggedIn';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';



//auth components
import SignUpForm from './Login-Signup Frontend/components/StartPage'


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

export default App;
