import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { BrowserRouter as Router } from 'react-router-dom' //for routing
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
const middleware = [logger, ReduxThunk];
//store part

const store = createStore(
  rootReducer,
  {}, //state will be rendered here 
  composeWithDevTools(applyMiddleware(...middleware))
)
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));


serviceWorker.unregister();

export default store 
