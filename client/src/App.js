import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Jobs from './Jobs/Jobs'

function App() {
  return (
    <div>
      <Link to="/jobs">Jobs</Link>

      <Switch>
        <Route exact path="/jobs" component={Jobs} />
      </Switch>

    </div>
  );
}

export default App;
