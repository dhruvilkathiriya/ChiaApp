import * as TYPES from '../actions/types';

const initialState = {
  userProfile: {},
  userLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_USER_PROFILE:
      return {...state, userLoading: true};
    case TYPES.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userLoading: false,
        userProfile: action?.data,
      };
    case TYPES.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userLoading: false,
        userProfile: {},
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
