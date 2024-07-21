import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


export const VERFICATION_REQUEST = 'VERFICATION_REQUEST';
export const VERFICATION_SUCCESS = 'VERFICATION_SUCCESS';
export const VERFICATION_FAILURE = 'VERFICATION_FAILURE';

const signUpApiUrl = 'https://back-end-njci.onrender.com/signup';
const VerficationApiUrl = ' https://back-end-njci.onrender.com/verify';

export const signupRequest = (userData) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });

        try {
            // Make the POST request with axios
            const response = await axios.post(signUpApiUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Log the response
            console.log('Response:', response);

            // Dispatch success action with response data
            dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        } catch (error) {
            // Log the error
            console.error('Error:', error);

            // Dispatch failure action with error message
            dispatch({ type: SIGNUP_FAILURE, payload: error.message });
        }
    };
};


export const VerficationRequest = (userData) => {
    return async (dispatch) => {
        dispatch({ type:VERFICATION_REQUEST });

        try {
            // Make the POST request with axios
            const response = await axios.post(VerficationApiUrl, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Log the response
            console.log('Response:', response);

            // Dispatch success action with response data
            dispatch({ type: VERFICATION_SUCCESS, payload: response.data });
        } catch (error) {
            // Log the error
            console.error('Error:', error);

            // Dispatch failure action with error message
            dispatch({ type: VERFICATION_FAILURE, payload: error.message });
        }
    };
};
