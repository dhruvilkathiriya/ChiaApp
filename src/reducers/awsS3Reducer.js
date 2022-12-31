import * as TYPES from '../actions/types';

const initialState = {
  preSignedLoading: false,
  preSignedURLs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.PRE_SIGNED_URL:
      return {...state, preSignedLoading: true};
    case TYPES.PRE_SIGNED_URL_SUCCESS:
      return {...state, preSignedLoading: false, preSignedURLs: action.data};
    case TYPES.PRE_SIGNED_URL_FAILURE:
      return {...state, preSignedLoading: false};
    case TYPES.RESET_PRE_SIGNED_URL:
      return initialState;

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
