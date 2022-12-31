import * as TYPES from './types';

export function createOrder() {
  return {type: TYPES.CREATE_ORDER};
}

export function createOrderSuccess(data) {
  return {type: TYPES.CREATE_ORDER_SUCCESS, data};
}

export function createOrderFailure(data) {
  return {type: TYPES.CREATE_ORDER_FAILURE, data};
}

export function getOrders(data) {
  return {type: TYPES.GET_ORDERS, data};
}

export function getOrdersSuccess(data) {
  return {type: TYPES.GET_ORDERS_SUCCESS, data};
}

export function getOrdersFailure(data) {
  return {type: TYPES.GET_ORDERS_FAILURE, data};
}

export function getOrderInfo(data) {
  return {type: TYPES.GET_ORDER_INFO, data};
}

export function getOrderInfoSuccess(data) {
  return {type: TYPES.GET_ORDER_INFO_SUCCESS, data};
}

export function getOrderInfoFailure(data) {
  return {type: TYPES.GET_ORDER_INFO_FAILURE, data};
}

export function getOrdersForCurrentCloset(data) {
  return {type: TYPES.GET_ORDERS_FOR_CURRENT_CLOSET, data};
}

export function getOrdersForCurrentClosetSuccess(data) {
  return {type: TYPES.GET_ORDERS_FOR_CURRENT_CLOSET_SUCCESS, data};
}

export function getOrdersForCurrentClosetFailure(data) {
  return {type: TYPES.GET_ORDERS_FOR_CURRENT_CLOSET_FAILURE, data};
}

export function getClosetOrderInfo(data) {
  return {type: TYPES.GET_CLOSET_ORDER_INFO, data};
}

export function getClosetOrderInfoSuccess(data) {
  return {type: TYPES.GET_CLOSET_ORDER_INFO_SUCCESS, data};
}

export function getClosetOrderInfoFailure(data) {
  return {type: TYPES.GET_CLOSET_ORDER_INFO_FAILURE, data};
}
