/*
In Redux an "action" is a simple object that contains the minimal representation of change to the state.

The actions for "people" and "person" are more complex, so for organization they are defined in their own files
and passed through (reexported) here.
*/

import ActionTypes from '../constants/ActionTypes';

//re-export other actions to make index a single entry point
export {fetchAnAppData} from './anAppData.js';
