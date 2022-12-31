import * as TYPES from '../actions/types';

const initialState = {
  listingProduct: {},
  isListingProductLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_PRODUCT:
      return {...state, isListingProductLoading: true};
    case TYPES.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        listingProduct: action.data,
        isListingProductLoading: false,
      };
    case TYPES.CREATE_PRODUCT_FAILURE:
      return {...state, listingProduct: {}, isListingProductLoading: false};
    case TYPES.UPDATE_PRODUCT:
      return {...state, isListingProductLoading: true};
    case TYPES.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        listingProduct: action.data,
        isListingProductLoading: false,
      };
    case TYPES.UPDATE_PRODUCT_FAILURE:
      return {...state, listingProduct: {}, isListingProductLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
