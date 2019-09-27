import { combineReducers } from 'redux';

//all reducers coming from various files
import jobreducer from './Jobs/jobreducer';
import Feed from './Feeds/reducers/feedReducer';
import Auth from './Login-Signup Frontend/authreducer';
import Resume from './ResumeBuilder/resumeReducer';
import userProfile from './UserProfile/userReducer';

export default combineReducers({
  jobreducer,
  Feed,
  Auth,
  Resume,
  userProfile
})

