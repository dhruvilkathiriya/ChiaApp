import * as TYPES from '../actions/types';

const initialState = {
  intent: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CARD_SETUP_INTENT:
      return {...state, intent: action.data};
    case TYPES.CARD_SETUP_INTENT_SUCCESS:
      return {...state, intent: action.data};
    case TYPES.CARD_SETUP_INTENT_FAILURE:
      return {...state, intent: action.data};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
