import * as TYPES from '../actions/types';

const initialState = {
  productInfoLoading: false,
  productInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT_INFO:
      return {...state, productInfoLoading: true};
    case TYPES.GET_PRODUCT_INFO_SUCCESS:
      return {...state, productInfoLoading: false, productInfo: action.data};
    case TYPES.GET_PRODUCT_INFO_FAILURE:
      return {...state, productInfoLoading: false, productInfo: {}};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
