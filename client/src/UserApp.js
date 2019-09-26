import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Jobs from './Jobs/Jobs';
import FeedArea from './Feeds/components/feed-area';
import LoggedIn from './Pages/LoggedIn'
import Profile from './UserProfile/Profile'
import UpdateDetails from './UserProfile/CreateUser';
import AddJob from './Jobs/AddJob';
import Page from './ResumeBuilder/ResumeBuilder'

// import history from "./history";


const UserApp = () => {
  return (
    <Router basename='/user'>
      <Navbar />

      <Switch>
        <Route path="/loggedIn" exact component={LoggedIn} />
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/jobs/new" component={AddJob} />
        <Route path="/posts" component={FeedArea} />
        <Route exact path="/profile/edit/:id" component={UpdateDetails} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route path="/resumebuilder" component={Page} />
        <Route component={<h1>sorry nothing here</h1>} />
      </Switch>
    </Router>
  );
}

export default UserApp;