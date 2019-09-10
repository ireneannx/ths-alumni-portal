import { combineReducers } from 'redux';

//all reducers coming from various files
import jobreducer from './Jobs/jobreducer';

export default combineReducers({
  jobreducer
})