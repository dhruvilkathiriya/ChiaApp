import * as TYPES from '../actions/types';

const initialState = {
  closetPolicies: {},
  closetPoliciesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CLOSET_POLICIES:
      return {
        ...state,
        closetPoliciesLoading: true,
      };
    case TYPES.GET_CLOSET_POLICIES_SUCCESS:
      return {
        ...state,
        closetPolicies: action.data,
        closetPoliciesLoading: false,
      };
    case TYPES.GET_CLOSET_POLICIES_FAILURE:
      return {
        ...state,
        closetPolicies: {},
        closetPoliciesLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
