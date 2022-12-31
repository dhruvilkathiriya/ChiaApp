import _ from 'lodash';
import * as TYPES from '../actions/types';

const initialState = {
  recentSearchLoading: false,
  recentSearch: [],
  savedSearchLoading: false,
  savedSearch: [],
  searchedProductsLoading: false,
  searchedProducts: [],
  page: 1,
  hasNextPage: true,
  deleteSearchLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_RECENT_SEARCH:
      return {
        ...state,
        recentSearchLoading: true,
      };
    case TYPES.GET_RECENT_SEARCH_SUCCESS:
      return {
        ...state,
        recentSearch: action?.data || [],
        recentSearchLoading: false,
      };
    case TYPES.GET_RECENT_SEARCH_FAILURE:
      return {
        ...state,
        recentSearch: [],
        recentSearchLoading: false,
      };

    case TYPES.GET_SAVED_SEARCH:
      return {
        ...state,
        savedSearchLoading: true,
      };
    case TYPES.GET_SAVED_SEARCH_SUCCESS:
      return {
        ...state,
        savedSearch: action?.data || [],
        savedSearchLoading: false,
      };
    case TYPES.GET_SAVED_SEARCH_FAILURE:
      return {
        ...state,
        savedSearch: [],
        savedSearchLoading: false,
      };

    case TYPES.GET_SEARCHED_PRODUCTS:
      return {
        ...state,
        page: action?.data?.page,
        searchedProductsLoading: true,
      };
    case TYPES.GET_SEARCHED_PRODUCTS_SUCCESS:
      return {
        ...state,
        searchedProducts:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.searchedProducts.concat(action?.data?.docs),
        page: action.data.page,
        hasNextPage: action.data.hasNextPage,
        searchedProductsLoading: false,
      };
    case TYPES.GET_SEARCHED_PRODUCTS_FAILURE:
      return {
        ...state,
        searchedProducts: [],
        searchedProductsLoading: false,
      };

    case TYPES.DELETE_SAVED_SEARCH:
      return {
        ...state,
        deleteSearchLoading: true,
      };
    case TYPES.DELETE_SAVED_SEARCH_SUCCESS:
      return {
        ...state,
        savedSearch: _.filter(state.savedSearch, item => item.id !== action.id),
        deleteSearchLoading: false,
      };
    case TYPES.DELETE_SAVED_SEARCH_FAILURE:
      return {
        ...state,
        deleteSearchLoading: false,
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
