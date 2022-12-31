import * as TYPES from '../actions/types';

const initialState = {
  shipping: {},
  isShippingLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT_SHIPPING_TYPE:
      return {...state, isShippingLoading: true};
    case TYPES.GET_PRODUCT_SHIPPING_TYPE_SUCCESS:
      return {...state, shipping: action.data, isShippingLoading: false};
    case TYPES.GET_PRODUCT_SHIPPING_TYPE_FAILURE:
      return {...state, shipping: action.data, isShippingLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
