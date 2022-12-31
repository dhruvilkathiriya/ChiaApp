import * as TYPES from '../actions/types';

const initialState = {
  conditions: [],
  isConditionsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CONDITIONS:
      return {...state, isConditionsLoading: true};
    case TYPES.GET_CONDITIONS_SUCCESS:
      return {...state, conditions: action.data, isConditionsLoading: false};
    case TYPES.GET_CONDITIONS_FAILURE:
      return {...state, conditions: [], isConditionsLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
