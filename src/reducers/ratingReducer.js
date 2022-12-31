import * as TYPES from '../actions/types';

const initialState = {
  renterOptionList: [],
  optionLoading: false,
  buyerOptionList: [],
  lenderOptionList: [],
  sellerOptionList: [],
  orderRating: {},
  ratingLoading: false,
  approveImagesLoading: false,
  otherUserRating: {},
  productRatings: [],
  productRatingsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_RENTER_OPTIONS:
      return {...state, optionLoading: true};
    case TYPES.GET_RENTER_OPTIONS_SUCCESS:
      return {
        ...state,
        renterOptionList: action?.data?.options,
        optionLoading: false,
      };
    case TYPES.GET_RENTER_OPTIONS_FAILURE:
      return {...state, optionLoading: false};

    case TYPES.GET_BUYER_OPTIONS:
      return {...state, optionLoading: true};
    case TYPES.GET_BUYER_OPTIONS_SUCCESS:
      return {
        ...state,
        buyerOptionList: action?.data?.options,
        optionLoading: false,
      };
    case TYPES.GET_BUYER_OPTIONS_FAILURE:
      return {...state, optionLoading: false};

    case TYPES.GET_LENDER_OPTIONS:
      return {...state, optionLoading: true};
    case TYPES.GET_LENDER_OPTIONS_SUCCESS:
      return {
        ...state,
        lenderOptionList: action?.data?.options,
        optionLoading: false,
      };
    case TYPES.GET_LENDER_OPTIONS_FAILURE:
      return {...state, optionLoading: false};

    case TYPES.GET_SELLER_OPTIONS:
      return {...state, optionLoading: true};
    case TYPES.GET_SELLER_OPTIONS_SUCCESS:
      return {
        ...state,
        sellerOptionList: action?.data?.options,
        optionLoading: false,
      };
    case TYPES.GET_SELLER_OPTIONS_FAILURE:
      return {...state, optionLoading: false};

    case TYPES.RATE_ORDER:
      return {...state, ratingLoading: true};
    case TYPES.RATE_ORDER_SUCCESS:
      return {
        ...state,
        orderRating: action?.data,
        ratingLoading: false,
      };
    case TYPES.RATE_ORDER_FAILURE:
      return {...state, ratingLoading: false};

    case TYPES.UPDATE_ORDER_RATING:
      return {...state, ratingLoading: true};
    case TYPES.UPDATE_ORDER_RATING_SUCCESS:
      return {
        ...state,
        orderRating: action?.data,
        ratingLoading: false,
      };
    case TYPES.UPDATE_ORDER_RATING_FAILURE:
      return {...state, ratingLoading: false};

    case TYPES.APPROVE_REVIEWED_IMAGES:
      return {...state, approveImagesLoading: true};
    case TYPES.APPROVE_REVIEWED_IMAGES_SUCCESS:
      return {
        ...state,
        approveImagesLoading: false,
        otherUserRating: action?.data,
      };
    case TYPES.APPROVE_REVIEWED_IMAGES_FAILURE:
      return {...state, approveImagesLoading: false, otherUserRating: {}};

    case TYPES.GET_PRODUCT_RATINGS:
      return {...state, productRatingsLoading: true};
    case TYPES.GET_PRODUCT_RATINGS_SUCCESS:
      return {
        ...state,
        productRatingsLoading: false,
        productRatings: action?.data?.docs,
      };
    case TYPES.GET_PRODUCT_RATINGS_FAILURE:
      return {...state, productRatingsLoading: false, productRatings: {}};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
