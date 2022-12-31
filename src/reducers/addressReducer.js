import * as TYPES from '../actions/types';

const initialState = {
  addressLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_ADDRESS:
      return {...state, addressLoading: true};
    case TYPES.ADD_ADDRESS_SUCCESS:
      return {...state, addressLoading: false};
    case TYPES.ADD_ADDRESS_FAILURE:
      return {...state, addressLoading: false};

    case TYPES.EDIT_ADDRESS:
      return {...state, addressLoading: true};
    case TYPES.EDIT_ADDRESS_SUCCESS:
      return {...state, addressLoading: false};
    case TYPES.EDIT_ADDRESS_FAILURE:
      return {...state, addressLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
