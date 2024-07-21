// reducer.js
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ,VERFICATION_FAILURE,VERFICATION_SUCCESS} from '../action/authAction';

const initialState = {
    loading: false,
    user: null,
    error: null,
    verficationLoading:false,
    VerficationUser:null,
    VerficationError:null,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return { ...state, loading: true };
      case SIGNUP_SUCCESS:
        return { ...state, loading: false, user: action.payload };
      case SIGNUP_FAILURE:
        return { ...state, loading: false, error: action.payload };
        case VERFICATION_FAILURE:
        return { ...state, verficationLoading: true };
      case VERFICATION_SUCCESS:
        return { ...state, verficationLoading: false, VerficationUser: action.payload };
      case VERFICATION_FAILURE:
        return { ...state, verficationLoading: false, VerficationError: action.payload };
      default:
        return state;
    }
  };
  
  export default signupReducer;