import * as TYPES from '../actions/types';
import _ from 'lodash';

const initialState = {
  currentClosetOrderLoading: false,
  pageLoading: false,
  lendingOrderPage: 1,
  soldOrderPage: 1,
  hasNextPage: true,
  limit: 10,
  currentClosetOrders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ORDERS_FOR_CURRENT_CLOSET:
      return {
        ...state,
        lendingOrderPage: _.isEqual(action?.data?.type, 'rent')
          ? action.data.page
          : state.lendingOrderPage,
        soldOrderPage: _.isEqual(action?.data?.type, 'purchase')
          ? action.data.page
          : state.soldOrderPage,
        currentClosetOrderLoading: action?.data?.page !== 1,
        pageLoading: action?.data?.page === 1,
      };
    case TYPES.GET_ORDERS_FOR_CURRENT_CLOSET_SUCCESS:
      return {
        ...state,
        currentClosetOrderLoading: false,
        pageLoading: false,
        currentClosetOrders:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.currentClosetOrders.concat(action?.data?.docs),
        lendingOrderPage: _.isEqual(action?.data?.type, 'rent')
          ? action.data.page
          : state.lendingOrderPage,
        soldOrderPage: _.isEqual(action?.data?.type, 'purchase')
          ? action.data.page
          : state.soldOrderPage,
        hasNextPage: action.data.hasNextPage,
      };
    case TYPES.GET_ORDERS_FOR_CURRENT_CLOSET_FAILURE:
      return {
        ...state,
        currentClosetOrderLoading: false,
        pageLoading: false,
        currentClosetOrders: [],
      };

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
