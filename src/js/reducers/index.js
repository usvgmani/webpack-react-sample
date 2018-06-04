/*
A reducer is a pure function, meaning:
    * return value depends soley on the values of the arguments
    * there are no side effects
    * return new values rather than modifying the values passed in

A reducer takes the current state and an action, and returns a new state.  

You could write a giant reducer than handles every piece of your state object, 
but its cleaner to create multiple small reducers and combine them together like below.

*/

import {combineReducers} from 'redux';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({ 
  routing: routeReducer,
});
export default rootReducer;
