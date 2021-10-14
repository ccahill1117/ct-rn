import { combineReducers } from 'redux';
import toolReducer from './tools-reducer';

// Root Reducer
const rootReducer = combineReducers({
  tools: toolReducer,
});

export default rootReducer;
