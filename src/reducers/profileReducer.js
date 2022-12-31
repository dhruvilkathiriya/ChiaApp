import * as TYPES from '../actions/types';

const initialState = {
  profileLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.EDIT_PROFILE_START:
      return {...state, profileLoading: true};
    case TYPES.EDIT_PROFILE_SUCCESS:
      return {...state, profileLoading: false};
    case TYPES.EDIT_PROFILE_FAILURE:
      return {...state, profileLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
