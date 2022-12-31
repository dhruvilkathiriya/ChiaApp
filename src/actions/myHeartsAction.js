import * as TYPES from './types';

export function getLikedProducts(data) {
  return {type: TYPES.GET_LIKED_PRODUCTS, data};
}

export function getLikedProductsSuccess(data) {
  return {type: TYPES.GET_LIKED_PRODUCTS_SUCCESS, data};
}

export function getLikedProductsFailure(data) {
  return {type: TYPES.GET_LIKED_PRODUCTS_FAILURE, data};
}

export function createLikeProduct(data) {
  return {type: TYPES.CREATE_LIKE_PRODUCT, data};
}

export function createLikeProductSuccess(data) {
  return {type: TYPES.CREATE_LIKE_PRODUCT_SUCCESS, data};
}

export function createLikeProductFailure() {
  return {type: TYPES.CREATE_LIKE_PRODUCT_FAILURE};
}

export function deleteLikedProduct(data) {
  return {type: TYPES.DELETE_LIKED_PRODUCT, data};
}

export function deleteLikedProductSuccess(id) {
  return {type: TYPES.DELETE_LIKED_PRODUCT_SUCCESS, id};
}

export function deleteLikedProductFailure() {
  return {type: TYPES.DELETE_LIKED_PRODUCT_FAILURE};
}
