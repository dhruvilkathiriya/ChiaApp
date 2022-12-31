import * as TYPES from '../actions/types';

const initialState = {
  productSizesLoading: false,
  productSizes: [],
  productStylesLoading: false,
  productStyles: [],
  productDesignersLoading: false,
  productDesigners: [],
  updateInterestsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCT_SIZES:
      return {...state, productSizesLoading: true};
    case TYPES.GET_PRODUCT_SIZES_SUCCESS:
      return {...state, productSizes: action.data, productSizesLoading: false};
    case TYPES.GET_PRODUCT_SIZES_FAILURE:
      return {...state, productSizes: [], productSizesLoading: false};

    case TYPES.GET_PRODUCT_STYLES:
      return {...state, productStylesLoading: true};
    case TYPES.GET_PRODUCT_STYLES_SUCCESS:
      return {
        ...state,
        productStyles: action.data,
        productStylesLoading: false,
      };
    case TYPES.GET_PRODUCT_STYLES_FAILURE:
      return {...state, productStyles: [], productStylesLoading: false};

    case TYPES.GET_PRODUCT_DESIGNERS:
      return {...state, productDesignersLoading: true};
    case TYPES.GET_PRODUCT_DESIGNERS_SUCCESS:
      return {
        ...state,
        productDesigners: action.data,
        productDesignersLoading: false,
      };
    case TYPES.GET_PRODUCT_DESIGNERS_FAILURE:
      return {...state, productDesigners: [], productDesignersLoading: false};

    case TYPES.UPDATE_INTERESTS:
      return {...state, updateInterestsLoading: true};
    case TYPES.UPDATE_INTERESTS_SUCCESS:
      return {...state, updateInterestsLoading: false};
    case TYPES.UPDATE_INTERESTS_FAILURE:
      return {...state, updateInterestsLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
