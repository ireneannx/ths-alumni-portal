import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Jobs from './Jobs/Jobs'
import AddJob from './Jobs/AddJob'

function App() {
  return (
    <div>
      <Navbar />
      <Link to="/jobs">Jobs</Link>

      <Switch>
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/jobs/new" component={AddJob} />
      </Switch>

    </div>
  );
}

export default App;
