//Get the corresponding user lists
//Have done for getting Discloser lists - HO and field user
import { combineReducers } from 'redux'
import ActionTypes from '../constants/actionTypes';
const initialState = {
    isDataLoading : false,
    anAppData : []
};

export default function getAppData(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_DATA:
            return {...state,
                isDataLoading: true
            };
        case ActionTypes.RECEIVE_DATA:
            return{...state,
                isDataLoading: true,
                anAppData: action
                };      
        case ActionTypes.CLEAR_DATA:
                return{...state,
                    anAppData: []
                };
        default:
            return state;
    }
}
