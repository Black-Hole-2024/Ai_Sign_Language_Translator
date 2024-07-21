// reducer.js
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    VERFICATION_REQUEST,
    VERFICATION_SUCCESS,
    VERFICATION_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../action/authAction';

const initialState = {
    loading: false,
    user: null,
    error: null,
    verficationLoading: false,
    VerficationUser: null,
    VerficationError: null,
    loginLoading: false,
    loginUser: null,
    loginError: null,
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true };
        case SIGNUP_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case SIGNUP_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case VERFICATION_REQUEST:
            return { ...state, verficationLoading: true, VerficationError: null };
        case VERFICATION_SUCCESS:
            return { ...state, verficationLoading: false, VerficationUser: action.payload };
        case VERFICATION_FAILURE:
            return { ...state, verficationLoading: false, VerficationError: action.payload };
        case LOGIN_REQUEST:
            return { ...state, loginLoading: true, loginError: null };
        case LOGIN_SUCCESS:
            return { ...state, loginLoading: false, loginUser: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loginLoading: false, loginError: action.payload };
        case LOGOUT:
            return { ...state, loginUser: null, loginError: null };
        default:
            return state;
    }
};

export default signupReducer;
