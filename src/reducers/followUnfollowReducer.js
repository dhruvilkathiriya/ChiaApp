import * as TYPES from '../actions/types';

const initialState = {
  follow: {},
  unfollow: {},
  followUnfollowLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FOLLOW_START:
      return {...state, followUnfollowLoading: true};
    case TYPES.FOLLOW_SUCCESS:
      return {...state, follow: action?.data, followUnfollowLoading: false};
    case TYPES.FOLLOW_FAILURE:
      return {...state, followUnfollowLoading: false};

    case TYPES.UNFOLLOW_START:
      return {...state, followUnfollowLoading: true};
    case TYPES.UNFOLLOW_SUCCESS:
      return {...state, unfollow: action?.data, followUnfollowLoading: false};
    case TYPES.UNFOLLOW_FAILURE:
      return {...state, followUnfollowLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
