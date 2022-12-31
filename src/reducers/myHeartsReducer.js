import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  likedProductsLoading: false,
  likedProducts: [],
  page: 1,
  hasNextPage: true,
  deleteLikeLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_LIKED_PRODUCTS:
      return {
        ...state,
        page: action?.data?.page,
        likedProductsLoading: true,
      };
    case TYPES.GET_LIKED_PRODUCTS_SUCCESS:
      return {
        ...state,
        likedProductsLoading: false,
        likedProducts:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.likedProducts.concat(action?.data?.docs),
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
      };
    case TYPES.GET_LIKED_PRODUCTS_FAILURE:
      return {
        ...state,
        likedProductsLoading: false,
        likedProducts: action.data,
      };

    case TYPES.CREATE_LIKE_PRODUCT:
      return {
        ...state,
        likedProductsLoading: true,
      };
    case TYPES.CREATE_LIKE_PRODUCT_SUCCESS:
      return {
        ...state,
        likedProductsLoading: false,
      };
    case TYPES.CREATE_LIKE_PRODUCT_FAILURE:
      return {
        ...state,
        likedProductsLoading: false,
      };

    case TYPES.DELETE_LIKED_PRODUCT:
      return {
        ...state,
        deleteLikeLoading: true,
      };
    case TYPES.DELETE_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteLikeLoading: false,
        likedProducts: _.filter(
          state.likedProducts,
          item => item.product.id !== action.id,
        ),
      };
    case TYPES.DELETE_LIKED_PRODUCT_FAILURE:
      return {
        ...state,
        deleteLikeLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
