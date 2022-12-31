import * as TYPES from '../actions/types';

const initialState = {
  sizes: [],
  isSizesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SIZES:
      return {...state, isSizesLoading: true};
    case TYPES.GET_SIZES_SUCCESS:
      return {...state, sizes: action.data, isSizesLoading: false};
    case TYPES.GET_SIZES_FAILURE:
      return {...state, sizes: [], isSizesLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
