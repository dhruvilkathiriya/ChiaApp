import * as TYPES from './types';

export function getCategories(data) {
  return {type: TYPES.GET_CATEGORIES, data};
}

export function getCategoriesSuccess(data) {
  return {type: TYPES.GET_CATEGORIES_SUCCESS, data};
}

export function getCategoriesFailure(data) {
  return {type: TYPES.GET_CATEGORIES_FAILURE, data};
}

export function getSubCategories(data) {
  return {type: TYPES.GET_SUB_CATEGORIES, data};
}

export function getSubCategoriesSuccess(data) {
  return {type: TYPES.GET_SUB_CATEGORIES_SUCCESS, data};
}

export function getSubCategoriesFailure(data) {
  return {type: TYPES.GET_SUB_CATEGORIES_FAILURE, data};
}

export function getDesigners() {
  return {type: TYPES.GET_DESIGNERS};
}

export function getDesignersSuccess(data) {
  return {type: TYPES.GET_DESIGNERS_SUCCESS, data};
}

export function getDesignersFailure(data) {
  return {type: TYPES.GET_DESIGNERS_FAILURE, data};
}

export function getSizes(data) {
  return {type: TYPES.GET_SIZES, data};
}

export function getSizesSuccess(data) {
  return {type: TYPES.GET_SIZES_SUCCESS, data};
}

export function getSizesFailure(data) {
  return {type: TYPES.GET_SIZES_FAILURE, data};
}

export function getConditions(data) {
  return {type: TYPES.GET_CONDITIONS, data};
}

export function getConditionsSuccess(data) {
  return {type: TYPES.GET_CONDITIONS_SUCCESS, data};
}

export function getConditionsFailure(data) {
  return {type: TYPES.GET_CONDITIONS_FAILURE, data};
}

export function getProductShippingTypes(data) {
  return {type: TYPES.GET_PRODUCT_SHIPPING_TYPE, data};
}

export function getProductShippingTypesSuccess(data) {
  return {type: TYPES.GET_PRODUCT_SHIPPING_TYPE_SUCCESS, data};
}

export function getProductShippingTypesFailure(data) {
  return {type: TYPES.GET_PRODUCT_SHIPPING_TYPE_FAILURE, data};
}

export function createProduct(data) {
  return {type: TYPES.CREATE_PRODUCT, data};
}

export function createProductSuccess(data) {
  return {type: TYPES.CREATE_PRODUCT_SUCCESS, data};
}

export function createProductFailure(data) {
  return {type: TYPES.CREATE_PRODUCT_FAILURE, data};
}

export function updateProduct(data) {
  return {type: TYPES.UPDATE_PRODUCT, data};
}

export function updateProductSuccess(data) {
  return {type: TYPES.UPDATE_PRODUCT_SUCCESS, data};
}

export function updateProductFailure(data) {
  return {type: TYPES.UPDATE_PRODUCT_FAILURE, data};
}
