import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Loading from './loading';
// import Navbar from './Navbar';
// import Jobs from './Jobs/Jobs';
// import FeedArea from './Feeds/components/feed-area';
// import LoggedIn from './Pages/LoggedIn'
// import Profile from './UserProfile/Profile'
// import UpdateDetails from './UserProfile/CreateUser';
// import AddJob from './Jobs/AddJob';
// import Page from './ResumeBuilder/ResumeBuilder'

const Navbar = lazy(() => import('./Navbar'));
const Jobs = lazy(() => import('./Jobs/Jobs'));
const FeedArea = lazy(() => import('./Feeds/components/feed-area'));
const LoggedIn = lazy(() => import('./Pages/LoggedIn'));
const Profile = lazy(() => import('./UserProfile/Profile'));
const UpdateDetails = lazy(() => import('./UserProfile/CreateUser'));
const AddJob = lazy(() => import('./Jobs/AddJob'));
const Page = lazy(() => import('./ResumeBuilder/ResumeBuilder'));
const NotFound = lazy(() => import('./NotFound'));


const UserApp = () => {
  return (
    <Router basename='/user'>
      <Navbar />

      <Suspense fallback={<Loading />} />
      <Switch>
        <Route exact path="/loggedIn" component={LoggedIn} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/jobs/new" component={AddJob} />
        <Route exact path="/posts" component={FeedArea} />
        <Route exact path="/profile/edit/:id" component={UpdateDetails} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/resumebuilder" component={Page} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Suspense />
    </Router>
  );
}

export default UserApp;