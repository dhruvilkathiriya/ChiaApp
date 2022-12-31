import * as TYPES from './types';

export function getRecentSearch(data) {
  return {type: TYPES.GET_RECENT_SEARCH, data};
}

export function getRecentSearchSuccess(data) {
  return {type: TYPES.GET_RECENT_SEARCH_SUCCESS, data};
}

export function getRecentSearchFailure(data) {
  return {type: TYPES.GET_RECENT_SEARCH_FAILURE, data};
}

export function getSavedSearch(data) {
  return {type: TYPES.GET_SAVED_SEARCH, data};
}

export function getSavedSearchSuccess(data) {
  return {type: TYPES.GET_SAVED_SEARCH_SUCCESS, data};
}

export function getSavedSearchFailure(data) {
  return {type: TYPES.GET_SAVED_SEARCH_FAILURE, data};
}

export function getSearchedProducts(data) {
  return {type: TYPES.GET_SEARCHED_PRODUCTS, data};
}

export function getSearchedProductsSuccess(data) {
  return {type: TYPES.GET_SEARCHED_PRODUCTS_SUCCESS, data};
}

export function getSearchedProductsFailure(data) {
  return {type: TYPES.GET_SEARCHED_PRODUCTS_FAILURE, data};
}

export function deleteSavedSearch(data) {
  return {type: TYPES.DELETE_SAVED_SEARCH, data};
}

export function deleteSavedSearchSuccess(id) {
  return {type: TYPES.DELETE_SAVED_SEARCH_SUCCESS, id};
}

export function deleteSavedSearchFailure() {
  return {type: TYPES.DELETE_SAVED_SEARCH_FAILURE};
}
