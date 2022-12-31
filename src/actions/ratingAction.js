import * as TYPES from './types';

export function getRenterOptions() {
  return {type: TYPES.GET_RENTER_OPTIONS};
}

export function getRenterOptionsSuccess(data) {
  return {type: TYPES.GET_RENTER_OPTIONS_SUCCESS, data};
}

export function getRenterOptionsFailure() {
  return {type: TYPES.GET_RENTER_OPTIONS_FAILURE};
}

export function getBuyerOptions() {
  return {type: TYPES.GET_BUYER_OPTIONS};
}

export function getBuyerOptionsSuccess(data) {
  return {type: TYPES.GET_BUYER_OPTIONS_SUCCESS, data};
}

export function getBuyerOptionsFailure() {
  return {type: TYPES.GET_BUYER_OPTIONS_FAILURE};
}

export function getLenderOptions() {
  return {type: TYPES.GET_LENDER_OPTIONS};
}

export function getLenderOptionsSuccess(data) {
  return {type: TYPES.GET_LENDER_OPTIONS_SUCCESS, data};
}

export function getLenderOptionsFailure() {
  return {type: TYPES.GET_LENDER_OPTIONS_FAILURE};
}

export function getSellerOptions() {
  return {type: TYPES.GET_SELLER_OPTIONS};
}

export function getSellerOptionsSuccess(data) {
  return {type: TYPES.GET_SELLER_OPTIONS_SUCCESS, data};
}

export function getSellerOptionsFailure() {
  return {type: TYPES.GET_SELLER_OPTIONS_FAILURE};
}

export function rateOrder(data) {
  return {type: TYPES.RATE_ORDER, data};
}

export function rateOrderSuccess(data) {
  return {type: TYPES.RATE_ORDER_SUCCESS, data};
}

export function rateOrderFailure(data) {
  return {type: TYPES.RATE_ORDER_FAILURE, data};
}

export function updateOrderRating(data) {
  return {type: TYPES.UPDATE_ORDER_RATING, data};
}

export function updateOrderRatingSuccess(data) {
  return {type: TYPES.UPDATE_ORDER_RATING_SUCCESS, data};
}

export function updateOrderRatingFailure(data) {
  return {type: TYPES.UPDATE_ORDER_RATING_FAILURE, data};
}

export function getReviews(data) {
  return {type: TYPES.GET_MY_REVIEWS, data};
}

export function getReviewsSuccess(data) {
  return {type: TYPES.GET_MY_REVIEWS_SUCCESS, data};
}

export function getReviewsFailure(data) {
  return {type: TYPES.GET_MY_REVIEWS_FAILURE, data};
}

export function approveReviewedImages(data) {
  return {type: TYPES.APPROVE_REVIEWED_IMAGES, data};
}

export function approveReviewedImagesSuccess(data) {
  return {type: TYPES.APPROVE_REVIEWED_IMAGES_SUCCESS, data};
}

export function approveReviewedImagesFailure(data) {
  return {type: TYPES.APPROVE_REVIEWED_IMAGES_FAILURE, data};
}

export function getProductRatings(data) {
  return {type: TYPES.GET_PRODUCT_RATINGS, data};
}

export function getProductRatingsSuccess(data) {
  return {type: TYPES.GET_PRODUCT_RATINGS_SUCCESS, data};
}

export function getProductRatingsFailure(data) {
  return {type: TYPES.GET_PRODUCT_RATINGS_FAILURE, data};
}
