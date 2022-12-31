import * as TYPES from './types';

export function getCurrentUserCart() {
  return {type: TYPES.GET_CURRENT_USER_CART};
}

export function getCurrentUserCartSuccess(data) {
  return {type: TYPES.GET_CURRENT_USER_CART_SUCCESS, data};
}

export function getCurrentUserCartFailure() {
  return {type: TYPES.GET_CURRENT_USER_CART_FAILURE};
}

export function addProductToCart(data) {
  return {type: TYPES.ADD_PRODUCT_TO_CART, data};
}

export function addProductToCartSuccess() {
  return {type: TYPES.ADD_PRODUCT_TO_CART_SUCCESS};
}

export function addProductToCartFailure() {
  return {type: TYPES.ADD_PRODUCT_TO_CART_FAILURE};
}

export function removeProductFromCart(data) {
  return {type: TYPES.REMOVE_PRODUCT_FROM_CART, data};
}

export function removeProductFromCartSuccess(id) {
  return {type: TYPES.REMOVE_PRODUCT_FROM_CART_SUCCESS, id};
}

export function removeProductFromCartFailure() {
  return {type: TYPES.REMOVE_PRODUCT_FROM_CART_FAILURE};
}

export function updateShipping(data) {
  return {type: TYPES.UPDATE_SHIPPING, data};
}

export function updateShippingSuccess() {
  return {type: TYPES.UPDATE_SHIPPING_SUCCESS};
}

export function updateShippingFailure() {
  return {type: TYPES.UPDATE_SHIPPING_FAILURE};
}
