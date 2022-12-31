import * as TYPES from '../actions/types';

const initialState = {
  user: null,
  authLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_USER_DATA:
      return {...state, user: action.data};

    case TYPES.LOGIN_START:
      return {...state, authLoading: true};
    case TYPES.LOGIN_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.LOGIN_FAILURE:
      return {...state, user: null, authLoading: false};

    case TYPES.VERIFY_EMAIL:
      return {...state, authLoading: true};
    case TYPES.VERIFY_EMAIL_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.VERIFY_EMAIL_FAILURE:
      return {...state, user: null, authLoading: false};

    case TYPES.SIGN_UP_START:
      return {...state, authLoading: true};
    case TYPES.SIGN_UP_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.SIGN_UP_FAILURE:
      return {...state, user: null, authLoading: false};

    case TYPES.GOOGLE_SIGIN_START:
      return {...state, authLoading: true};
    case TYPES.GOOGLE_SIGIN_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.GOOGLE_SIGIN_FAILURE:
      return {...state, authLoading: false};

    case TYPES.FACEBOOK_SIGIN_START:
      return {...state, authLoading: true};
    case TYPES.FACEBOOK_SIGIN_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.FACEBOOK_SIGIN_FAILURE:
      return {...state, authLoading: false};

    case TYPES.APPLE_SIGIN_START:
      return {...state, authLoading: true};
    case TYPES.APPLE_SIGIN_SUCCESS:
      return {...state, user: action.data, authLoading: false};
    case TYPES.APPLE_SIGIN_FAILURE:
      return {...state, authLoading: false};

    case TYPES.FORGOT_PASSWORD_START:
      return {...state, authLoading: true};
    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {...state, authLoading: false};
    case TYPES.FORGOT_PASSWORD_FAILURE:
      return {...state, authLoading: false};

    case TYPES.SEND_EMAIL_VERIFICATION_OTP:
      return {...state, authLoading: true};
    case TYPES.SEND_EMAIL_VERIFICATION_OTP_SUCCESS:
      return {...state, authLoading: false};
    case TYPES.SEND_EMAIL_VERIFICATION_OTP_FAILURE:
      return {...state, authLoading: false};

    case TYPES.VERIFY_FORGOT_PASSWORD_OTP:
      return {...state, authLoading: true};
    case TYPES.VERIFY_FORGOT_PASSWORD_OTP_SUCCESS:
      return {...state, authLoading: false};
    case TYPES.VERIFY_FORGOT_PASSWORD_OTP_FAILURE:
      return {...state, authLoading: false};

    case TYPES.SET_NEW_PASSWORD:
      return {...state, authLoading: true};
    case TYPES.SET_NEW_PASSWORD_SUCCESS:
      return {...state, authLoading: false};
    case TYPES.SET_NEW_PASSWORD_FAILURE:
      return {...state, authLoading: false};

    case TYPES.LOGOUT_USER:
      return {...state, authLoading: true};
    case TYPES.LOGOUT_USER_SUCCESS:
      return {...state, authLoading: false};
    case TYPES.LOGOUT_USER_FAILURE:
      return {...state, authLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
