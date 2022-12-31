import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  productsLoading: false,
  products: [],
  page: 1,
  hasNextPage: true,
  pageLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CURRENT_USER_PRODUCTS:
      return {
        ...state,
        productsLoading: action?.data?.page !== 1,
        pageLoading: action?.data?.page === 1,
        page: action?.data?.page,
      };
    case TYPES.GET_CURRENT_USER_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        products:
          action?.data?.page === 1
            ? action?.data?.docs
            : _.uniqBy(state.products.concat(action?.data?.docs), 'id'),
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
        pageLoading: false,
      };
    case TYPES.GET_CURRENT_USER_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoading: false,
        pageLoading: false,
        products: [],
      };

    case TYPES.CREATE_LIKE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: _.map(state.products, item => {
          if (item?.id === action?.data?.id) {
            return {...item, like: true};
          }
          return item;
        }),
      };

    case TYPES.DELETE_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        products: _.map(state.products, item => {
          if (item?.id === action?.id) {
            return {...item, like: false};
          }
          return item;
        }),
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
