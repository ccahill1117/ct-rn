import { combineReducers } from 'redux';
import toolReducer from './tool-reducer';

// Root Reducer
const rootReducer = combineReducers({
  tools: toolReducer,
});

export default rootReducer;
