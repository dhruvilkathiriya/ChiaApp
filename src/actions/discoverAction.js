import * as TYPES from './types';

export function getOccasion() {
  return {type: TYPES.GET_OCCASION};
}

export function getOccasionSuccess(data) {
  return {type: TYPES.GET_OCCASION_SUCCESS, data};
}

export function getOccasionFailure() {
  return {type: TYPES.GET_OCCASION_FAILURE};
}

export function getMostLikedProduct(data) {
  return {type: TYPES.GET_MOST_LIKED_PRODUCT, data};
}

export function getMostLikedProductSuccess(data) {
  return {type: TYPES.GET_MOST_LIKED_PRODUCT_SUCCESS, data};
}

export function getMostLikedProductFailure() {
  return {type: TYPES.GET_MOST_LIKED_PRODUCT_FAILURE};
}

export function getBrandsWeLoveProducts(data) {
  return {type: TYPES.GET_BRANDS_WE_LOVE_PRODUCTS, data};
}

export function getBrandsWeLoveProductsSuccess(data) {
  return {type: TYPES.GET_BRANDS_WE_LOVE_PRODUCTS_SUCCESS, data};
}

export function getBrandsWeLoveProductsFailure() {
  return {type: TYPES.GET_BRANDS_WE_LOVE_PRODUCTS_FAILURE};
}
