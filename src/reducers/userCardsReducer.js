import * as TYPES from '../actions/types';

const initialState = {
  listOfCards: [],
  userCardsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_USER_CARDS:
      return {...state, listOfCards: action.data, userCardsLoading: true};
    case TYPES.GET_USER_CARDS_SUCCESS:
      return {...state, listOfCards: action.data, userCardsLoading: false};
    case TYPES.GET_USER_CARDS_FAILURE:
      return {...state, listOfCards: action.data, userCardsLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
