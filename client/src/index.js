import React from "react";
import history from "./history";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/draft-js-emoji-plugin/lib/plugin.css";
import "../node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css";
import setAuthToken from "./utility/setAuthToken";
import { changeAuth } from "./Login-Signup Frontend/authaction";
import { save, load } from "redux-localstorage-simple";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { Router } from "react-router-dom"; //for routing
// import logger from 'redux-logger';
import ReduxThunk from "redux-thunk";
import jwt_decode from "jwt-decode";
const middleware = [ ReduxThunk, save()];

//store part

const store = createStore(
  rootReducer,
  load(), //state will be rendered here
  composeWithDevTools(applyMiddleware(...middleware))
);

if (localStorage.thsToken) {
  setAuthToken(localStorage.thsToken);
  const decode = jwt_decode(localStorage.thsToken);
  // console.log(decode)
  store.dispatch(changeAuth(decode));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

export default store;
