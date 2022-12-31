import * as TYPES from '../actions/types';
import _ from 'lodash';

const initialState = {
  orderLoading: false,
  order: {},
  orders: [],
  rentOrderPage: 1,
  purchaseOrderPage: 1,
  pageLoading: false,
  hasNextPage: true,
  limit: 10,
  orderInfo: {},
  orderInfoLoading: false,
  closetOrderInfo: {},
  closetOrderInfoLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ORDER:
      return {...state, orderLoading: true};
    case TYPES.CREATE_ORDER_SUCCESS:
      return {...state, orderLoading: false};
    case TYPES.CREATE_ORDER_FAILURE:
      return {...state, orderLoading: false};

    case TYPES.GET_ORDERS:
      return {
        ...state,
        rentOrderPage: _.isEqual(action?.data?.type, 'rent')
          ? action.data.page
          : state.rentOrderPage,
        purchaseOrderPage: _.isEqual(action?.data?.type, 'purchase')
          ? action.data.page
          : state.purchaseOrderPage,
        orderLoading: action?.data?.page !== 1,
        pageLoading: action?.data?.page === 1,
      };
    case TYPES.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderLoading: false,
        pageLoading: false,
        orders:
          action?.data?.page === 1
            ? action?.data?.docs
            : state.orders.concat(action?.data?.docs),
        rentOrderPage: _.isEqual(action?.data?.type, 'rent')
          ? action.data.page
          : state.rentOrderPage,
        purchaseOrderPage: _.isEqual(action?.data?.type, 'purchase')
          ? action.data.page
          : state.purchaseOrderPage,
        hasNextPage: action.data.hasNextPage,
      };
    case TYPES.GET_ORDERS_FAILURE:
      return {...state, orderLoading: false, pageLoading: false, orders: []};

    case TYPES.GET_ORDER_INFO:
      return {...state, orderInfoLoading: true};
    case TYPES.GET_ORDER_INFO_SUCCESS:
      return {...state, orderInfoLoading: false, orderInfo: action.data};
    case TYPES.GET_ORDER_INFO_FAILURE:
      return {...state, orderInfoLoading: false, orderInfo: {}};

    case TYPES.GET_CLOSET_ORDER_INFO:
      return {...state, closetOrderInfoLoading: true};
    case TYPES.GET_CLOSET_ORDER_INFO_SUCCESS:
      return {
        ...state,
        closetOrderInfoLoading: false,
        closetOrderInfo: action.data,
      };
    case TYPES.GET_CLOSET_ORDER_INFO_FAILURE:
      return {...state, closetOrderInfoLoading: false, closetOrderInfo: {}};

    case TYPES.RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
