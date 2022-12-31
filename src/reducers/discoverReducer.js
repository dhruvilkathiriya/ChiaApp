import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  occasionList: [],
  occasionLoading: false,
  mostLikedProductList: [],
  brandsWeLoveProducts: [],
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_OCCASION:
      return {
        ...state,
        occasionLoading: true,
      };
    case TYPES.GET_OCCASION_SUCCESS:
      return {
        ...state,
        occasionList: action?.data,
        occasionLoading: false,
      };
    case TYPES.GET_OCCASION_FAILURE:
      return {
        ...state,
        occasionLoading: false,
      };

    case TYPES.GET_MOST_LIKED_PRODUCT:
      return {
        ...state,
        page: action?.data?.page,
        occasionLoading: true,
      };
    case TYPES.GET_MOST_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        mostLikedProductList:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.mostLikedProductList.concat(action?.data?.docs),
        occasionLoading: false,
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
      };
    case TYPES.GET_MOST_LIKED_PRODUCT_FAILURE:
      return {
        ...state,
        occasionLoading: false,
      };

    case TYPES.CREATE_LIKE_PRODUCT_SUCCESS:
      return {
        ...state,
        mostLikedProductList: _.map(state.mostLikedProductList, item => {
          if (item?.id === action?.data?.id) {
            return {...item, like: true};
          }
          return item;
        }),
        brandsWeLoveProducts: _.map(state.brandsWeLoveProducts, item => {
          if (item?.id === action?.data?.id) {
            return {...item, like: true};
          }
          return item;
        }),
      };

    case TYPES.DELETE_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        mostLikedProductList: _.map(state.mostLikedProductList, item => {
          if (item?.id === action?.id) {
            return {...item, like: false};
          }
          return item;
        }),
        brandsWeLoveProducts: _.map(state.brandsWeLoveProducts, item => {
          if (item?.id === action?.id) {
            return {...item, like: false};
          }
          return item;
        }),
      };

    case TYPES.GET_BRANDS_WE_LOVE_PRODUCTS:
      return {
        ...state,
        brandsWeLoveProducts: [],
      };
    case TYPES.GET_BRANDS_WE_LOVE_PRODUCTS_SUCCESS:
      return {
        ...state,
        brandsWeLoveProducts: action?.data?.docs || [],
      };
    case TYPES.GET_BRANDS_WE_LOVE_PRODUCTS_FAILURE:
      return {
        ...state,
        brandsWeLoveProducts: [],
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
