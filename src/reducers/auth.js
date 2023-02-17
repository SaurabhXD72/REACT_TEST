import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions/type.js';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                error: action.error,
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                error: null,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default authReducer;
