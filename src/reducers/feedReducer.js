import * as TYPES from '../actions/types';
import _ from 'lodash';

const initialState = {
  feed: [],
  feedLoading: false,
  endOfFeed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_FEED:
      return {...state, feed: action?.data?.feed || [], feedLoading: true};
    case TYPES.GET_FEED_SUCCESS:
      return {
        ...state,
        feed: state.feed.concat(action?.data),
        feedLoading: false,
        endOfFeed: _.isEmpty(action?.data),
      };
    case TYPES.GET_FEED_FAILURE:
      return {...state, feed: [], feedLoading: false};

    case TYPES.CREATE_LIKE_PRODUCT_SUCCESS:
      return {
        ...state,
        feed: _.map(state.feed, item => {
          if (item?.id === action?.data?.id) {
            return {...item, like: true};
          }
          return item;
        }),
      };

    case TYPES.DELETE_LIKED_PRODUCT_SUCCESS:
      return {
        ...state,
        feed: _.map(state.feed, item => {
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
