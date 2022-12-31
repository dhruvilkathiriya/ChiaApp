import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  cartLoading: false,
  cartList: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CURRENT_USER_CART:
      return {...state, cartLoading: true};
    case TYPES.GET_CURRENT_USER_CART_SUCCESS:
      return {...state, cartLoading: false, cartList: action?.data};
    case TYPES.GET_CURRENT_USER_CART_FAILURE:
      return {...state, cartLoading: false};

    case TYPES.ADD_PRODUCT_TO_CART:
      return {...state, cartLoading: true};
    case TYPES.ADD_PRODUCT_TO_CART_SUCCESS:
      return {...state, cartLoading: false};
    case TYPES.ADD_PRODUCT_TO_CART_FAILURE:
      return {...state, cartLoading: false};

    case TYPES.REMOVE_PRODUCT_FROM_CART:
      return {...state, cartLoading: true};
    case TYPES.REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        cartLoading: false,
        cartList: action?.id,
      };
    case TYPES.REMOVE_PRODUCT_FROM_CART_FAILURE:
      return {...state, cartLoading: false};

    case TYPES.UPDATE_SHIPPING:
      return {...state, cartLoading: true};
    case TYPES.UPDATE_SHIPPING_SUCCESS:
      return {
        ...state,
        cartLoading: false,
      };
    case TYPES.UPDATE_SHIPPING_FAILURE:
      return {...state, cartLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
