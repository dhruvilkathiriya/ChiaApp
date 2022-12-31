import * as TYPES from './types';

export function getProduct(data) {
  return {type: TYPES.GET_PRODUCT, data};
}

export function getProductSuccess(data) {
  return {type: TYPES.GET_PRODUCT_SUCCESS, data};
}

export function getProductFailure() {
  return {type: TYPES.GET_PRODUCT_FAILURE};
}

export function getProductInfo(data) {
  return {type: TYPES.GET_PRODUCT_INFO, data};
}

export function getProductInfoSuccess(data) {
  return {type: TYPES.GET_PRODUCT_INFO_SUCCESS, data};
}

export function getProductInfoFailure(data) {
  return {type: TYPES.GET_PRODUCT_INFO_FAILURE, data};
}

export function resetProducts() {
  return {type: TYPES.RESET_PRODUCT};
}

export function getProductColor(data) {
  return {type: TYPES.GET_PRODUCT_COLOR, data};
}

export function getProductColorSuccess(data) {
  return {type: TYPES.GET_PRODUCT_COLOR_SUCCESS, data};
}

export function getProductColorFailure() {
  return {type: TYPES.GET_PRODUCT_COLOR_FAILURE};
}
