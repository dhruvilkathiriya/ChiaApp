import * as TYPES from '../actions/types';

const initialState = {
  designers: [],
  isDesignersLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_DESIGNERS:
      return {...state, isDesignersLoading: true};
    case TYPES.GET_DESIGNERS_SUCCESS:
      return {...state, designers: action.data, isDesignersLoading: false};
    case TYPES.GET_DESIGNERS_FAILURE:
      return {...state, designers: [], isDesignersLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
