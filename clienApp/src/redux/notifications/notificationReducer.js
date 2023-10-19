/**
 * Author: Pavel Šesták
 */
import { notificationTypes } from './notificationTypes';

const INITIAL_STATE = {
    message: '',
    status: '',
    show: false,
};

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case notificationTypes.SET_NOTIFICATION:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                show: action.payload.show,
            };
        default:
            return state;
    }
};

export default notificationReducer;
