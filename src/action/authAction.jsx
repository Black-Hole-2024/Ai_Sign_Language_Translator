import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const VERFICATION_REQUEST = 'VERFICATION_REQUEST';
export const VERFICATION_SUCCESS = 'VERFICATION_SUCCESS';
export const VERFICATION_FAILURE = 'VERFICATION_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const signUpApiUrl = 'https://back-end-njci.onrender.com/signup';
const verficationApiUrl = 'https://back-end-njci.onrender.com/verify';
const loginApiUrl = 'https://back-end-njci.onrender.com/login';

export const signupRequest = (userData) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });

        try {
            console.log('Sign Up Request Data:', userData);

            const response = await axios.post(signUpApiUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response);

            dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        } catch (error) {
            if (error.response) {
                // console.error('Error Response Data:', error.response.data);
                dispatch({ type: SIGNUP_FAILURE, payload: error.response.data.message });
            } else {
                // console.error('Error:', error.message);
                dispatch({ type: SIGNUP_FAILURE, payload: error.message });
            }
        }
    };
};

export const VerficationRequest = (userData) => {
    return async (dispatch) => {
        dispatch({ type: VERFICATION_REQUEST });

        try {
            console.log('Verification Request Data:', userData);

            const response = await axios.post(verficationApiUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response);

            dispatch({ type: VERFICATION_SUCCESS, payload: response.data });
        } catch (error) {
            let errorMessage = 'An error occurred.';
    
            if (error.response && error.response.data && error.response.data.error) {
                console.error('Error Response Data:', error.response.data);
                if (error.response.data.error === 'Invalid verification code or username') {
                    errorMessage = 'Invalid verification code or username';
                }
            } else {
                console.error('Error:', error.message);
                errorMessage = error.message;
            }
    
            dispatch({ type: VERFICATION_FAILURE, payload: errorMessage });
        }
    };
};

export const loginRequest = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        try {
            console.log('Login Request Data:', userData);

            const response = await axios.post(loginApiUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response:', response);

            // Store the token in local storage
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
            }

            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        } catch (error) {
            let errorMessage = 'An error occurred.';
    
            if (error.response && error.response.data && error.response.data.error) {
                console.error('Error Response Data:', error.response.data);
                if (error.response.data.error === 'Invalid username or password') {
                    errorMessage = 'Invalid username or password';
                }
            } else {
                console.error('Error:', error.message);
                errorMessage = error.message;
            }
    
            dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
        }
    };
};
