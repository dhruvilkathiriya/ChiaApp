import * as TYPES from './types';

export function getProductSizes(data) {
  return {type: TYPES.GET_PRODUCT_SIZES, data};
}

export function getProductSizesSuccess(data) {
  return {type: TYPES.GET_PRODUCT_SIZES_SUCCESS, data};
}

export function getProductSizesFailure(data) {
  return {type: TYPES.GET_PRODUCT_SIZES_FAILURE, data};
}

export function getProductStyles(data) {
  return {type: TYPES.GET_PRODUCT_STYLES, data};
}

export function getProductStylesSuccess(data) {
  return {type: TYPES.GET_PRODUCT_STYLES_SUCCESS, data};
}

export function getProductStylesFailure(data) {
  return {type: TYPES.GET_PRODUCT_STYLES_FAILURE, data};
}

export function getProductDesigner(data) {
  return {type: TYPES.GET_PRODUCT_DESIGNERS, data};
}

export function getProductDesignerSuccess(data) {
  return {type: TYPES.GET_PRODUCT_DESIGNERS_SUCCESS, data};
}

export function getProductDesignerFailure(data) {
  return {type: TYPES.GET_PRODUCT_DESIGNERS_FAILURE, data};
}

export function updateInterests(data) {
  return {type: TYPES.UPDATE_INTERESTS, data};
}

export function updateInterestsSuccess(data) {
  return {type: TYPES.UPDATE_INTERESTS_SUCCESS, data};
}

export function updateInterestsFailure(data) {
  return {type: TYPES.UPDATE_INTERESTS_FAILURE, data};
}
