import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { changeAuth } from './Login-Signup Frontend/authaction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import SignUpForm from './Login-Signup Frontend/components/StartPage'
// import UserApp from './UserApp'
import Loading from './loading';

const SignUpForm = lazy(() => import('./Login-Signup Frontend/components/StartPage'));
const UserApp = lazy(() => import('./UserApp'));
const NotFound = lazy(() => import('./NotFound'));


//auth components

const ProtectedRoute = ({ component: Component, isLoggedIn }) => {

  return <Route
    render={() => isLoggedIn === true ?
      <Component />
      :
      <Redirect to={{ pathname: '/' }} />
    }
  />
}

class App extends Component {
  state = {}
  render() {

    return (
      <div>
        <React.Fragment>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={SignUpForm} />

              {/* <Route path="/user" component={UserApp} /> */}
              <ProtectedRoute path='/user' isLoggedIn={this.props.Auth.isLoggedIn} component={UserApp} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>

        </React.Fragment>
      </div>
    );
  }
}


// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   changeAuth
// }, dispatch)

const mapStateToProps = state => {
  return {
    Auth: state.Auth
  }
}

export default connect(mapStateToProps, null)(App);
