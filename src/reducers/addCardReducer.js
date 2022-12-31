import * as TYPES from '../actions/types';

const initialState = {
  cardDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CARD:
      return {...state, cardDetails: action.data};
    case TYPES.ADD_CARD_SUCCESS:
      return {...state, cardDetails: action.data};
    case TYPES.ADD_CARD_FAILURE:
      return {...state, cardDetails: action.data};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
