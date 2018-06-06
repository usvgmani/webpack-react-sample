//fetchAnAppData

import ActionTypes from '../constants/ActionTypes';
import { push } from 'react-router-redux';
import data from '../data/AnAppData.json'
export function fetchAnAppData() {

    return dispatch => {
        dispatch(loadAnAppData(data));    
    }
}

export function loadAnAppData(appData) {
  return {
      type: ActionTypes.RECEIVE_DATA,
      appData
  };
}



