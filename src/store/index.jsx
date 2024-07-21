// src/store/index.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import signupReducer from '../reducer/authReducer'; // Import your reducers here
// import studentReducer from '../reducers/studentReducer';

const rootReducer = combineReducers({
 auth: signupReducer,// Combine reducers if you have more than one
  
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
