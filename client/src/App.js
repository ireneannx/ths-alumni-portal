import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './UserProfile/Profile';

import LoggedIn from './Pages/LoggedIn';
import Jobs from './Jobs/Jobs'
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import CreateUser from './UserProfile/CreateUser'
import AddJob from './Jobs/AddJob'
import FeedArea from './Feeds/components/feed-area';

//auth components
import SignUpForm from './Login-Signup Frontend/StartPage'


function App() {
  return (
    <div>
      <Navbar />
      <Link to="/jobs">Jobs</Link>
      <Link to="/feeds">feeds</Link>


      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/jobs/new" component={AddJob} />
        <Route path="/feeds" component={FeedArea} />
        <Route path="/edit/:id" component={CreateUser} />
        <Route path="/loggedIn" exact component={LoggedIn} />
        <Route path="/" component={SignUpForm} />
        {/* note: first page is signup page */}
      </Switch>

    </div>
  );
}

export default App;
