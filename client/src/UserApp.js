import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import CreateUser from './UserProfile/CreateUser'
import Jobs from './Jobs/Jobs';
import FeedArea from './Feeds/components/feed-area';
import LoggedIn from './Pages/LoggedIn'
import Profile from './UserProfile/Profile';
import AddJob from './Jobs/AddJob'
const UserApp = () => {
  return (
    <Router basename='/user'>
      <Navbar />
      <br />

      <Switch>
        <Route path="/loggedIn" exact component={LoggedIn} />
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/jobs/new" component={AddJob} />

        <Route path="/posts" component={FeedArea} />
        <Route path="/edit/:id" component={CreateUser} />
        <Route path="/profiles/:id" component={Profile} />
      </Switch>
    </Router>
  );
}

export default UserApp;