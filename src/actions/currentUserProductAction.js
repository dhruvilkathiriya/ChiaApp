import * as TYPES from './types';

export function getCurrentUserProducts(data) {
  return {type: TYPES.GET_CURRENT_USER_PRODUCTS, data};
}

export function getCurrentUserProductsSuccess(data) {
  return {type: TYPES.GET_CURRENT_USER_PRODUCTS_SUCCESS, data};
}

export function getCurrentUserProductsFailure() {
  return {type: TYPES.GET_CURRENT_USER_PRODUCTS_FAILURE};
}
