import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  productLoading: false,
  productList: [],
  page: 1,
  hasNextPage: true,
  productColorList: [],
  productColorLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT:
      return {...state, page: action?.data?.page, productLoading: true};
    case TYPES.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productLoading: false,
        productList:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.productList.concat(action?.data?.docs),
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
      };
    case TYPES.GET_PRODUCT_FAILURE:
      return {...state, productLoading: false};

    case TYPES.CREATE_LIKE_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: _.map(state.productList, item => {
          if (item?.id === action?.data?.id) return {...item, like: true};
          return item;
        }),
      };

    case TYPES.DELETE_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: _.map(state.productList, item => {
          if (item?.id === action?.id) return {...item, like: false};
          return item;
        }),
      };

    case TYPES.RESET_PRODUCT:
      return initialState;

    case TYPES.RESET_STORE:
      return initialState;

    case TYPES.GET_PRODUCT_COLOR:
      return {...state, productColorLoading: true};
    case TYPES.GET_PRODUCT_COLOR_SUCCESS:
      return {
        ...state,
        productColorLoading: false,
        productColorList: action?.data,
      };
    case TYPES.GET_PRODUCT_COLOR_FAILURE:
      return {...state, productColorLoading: false};

    default:
      return state;
  }
};
