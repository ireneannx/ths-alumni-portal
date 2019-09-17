import { combineReducers } from 'redux';

//all reducers coming from various files
import jobreducer from './Jobs/jobreducer';
import Feed from './Feeds/reducers/feedReducer';

export default combineReducers({
  jobreducer,
  Feed
})
//dev check1
