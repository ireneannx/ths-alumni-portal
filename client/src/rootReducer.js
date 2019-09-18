import { combineReducers } from 'redux';

//all reducers coming from various files
import jobreducer from './Jobs/jobreducer';
import Feed from './Feeds/reducers/feedReducer';
import Auth from './Login-Signup Frontend/authreducer'

export default combineReducers({
  jobreducer,
  Feed,
  Auth
})
//dev check1
