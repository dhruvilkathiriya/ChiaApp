import * as TYPES from '../actions/types';

const initialState = {
  myReviews: [],
  reviewsLoading: false,
  page: 1,
  hasNextPage: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_MY_REVIEWS:
      return {...state, reviewsLoading: true, page: action?.data?.page};
    case TYPES.GET_MY_REVIEWS_SUCCESS:
      return {
        ...state,
        myReviews:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.myReviews.concat(action?.data?.docs),
        reviewsLoading: false,
        page: action?.data?.page,
        hasNextPage: action?.data?.hasNextPage,
      };

    case TYPES.UPDATE_ORDER_RATING:
      return {...state};

    case TYPES.GET_MY_REVIEWS_FAILURE:
      return {...state, reviewsLoading: false};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
