import ActionTypes from '../constants/actionTypes';

const initialState = {
	show: false,
    type:'',
    notication:''
};

export default function notify(state = initialState, action) {
    switch (action.type) {
    /*
    The iniitial request for the list of people has been dispatched.
    Simply set the isFetchingPeople property to true
    */
    case ActionTypes.NOTIFY_ON_ACTION_COMPLETE:
        return {
            ...state,
            type:action.alertType,
            notification:action.message,
            show:action.notify
        };
    case ActionTypes.HIDE_NOTIFICATION:
        return {
            ...state,
            type:'',
            notication:'',
            show:false
        };
    default:
        return state;
    }
}