import {takeLatest, all} from 'redux-saga/effects';

import * as TYPES from '../actions/types';
import {
  forgotPassword,
  login,
  signUp,
  registerFacebookUser,
  registerGoogleUser,
  getCurrentUser,
  verifyEmail,
  sendOtp,
  verifyForgotPasswordOtp,
  setNewPassword,
  getUserProfile,
  logoutUser,
  registerAppleUser,
} from './userSaga';
import {editProfile} from './profileSaga';
import {addAddress, editAddress} from './addressSaga';
import {
  getProductSizes,
  getProductStyles,
  getProductDesigner,
  updateInterests,
} from './interestsSaga';
import {addCard, cardSetUpIntent, getUserCards} from './billingSaga';
import {findUsersWithPhoneNumbers, getFaqs} from './faqsSaga';
import {getSiteSettings} from './siteSettingsSaga';
import {getCategories} from './categoriesSaga';
import {getSubCategories} from './subCategoriesSaga';
import {getDesigners} from './designersSaga';
import {getSizes} from './sizesSaga';
import {getConditions} from './conditionsSaga';
import {getProductShippingTypes} from './shippingSaga';
import {preSignedURL} from './awsS3Saga';
import {createProduct, updateProduct} from './listingSaga';
import {getProduct, getProductColor} from './productSaga';
import {
  createLikeProduct,
  deleteLikedProduct,
  getLikedProducts,
} from './myHeartsSaga';
import {getCurrentUserProducts} from './currentUserProductsSaga';
import {followUser, unfollowUser} from './followUnfollowSaga';
import {
  getCurrentUserCart,
  addProductToCart,
  removeProductFromCart,
  updateShipping,
} from './bagSaga';
import {getClosetPolicies} from './closetPoliciesSaga';
import {turnOnOffNotification} from './notificationSaga';
import {getProductInfo} from './productInfoSaga';
import {getFeed} from './feedSaga';
import {
  createOrder,
  getClosetOrderInfo,
  getOrderInfo,
  getOrders,
} from './orderSaga';
import {
  getBrandsWeLoveProducts,
  getMostLikedProduct,
  getOccasion,
} from './discoverSaga';
import {
  deleteSavedSearch,
  getRecentSearch,
  getSavedSearch,
  searchProductsByKeyword,
} from './searchSaga';
import {getOrdersForCurrentCloset} from '../sagas/orderSaga';
import {
  approveReviewedImages,
  getBuyerOptions,
  getLenderOptions,
  getProductRatings,
  getRenterOptions,
  getReviews,
  getSellerOptions,
  rateOrder,
  updateOrderRating,
} from './ratingSaga';
import {createMessage, createRoom, getMessages, getRooms} from './messageSaga';

export default function* root() {
  yield all([takeLatest(TYPES.GET_CURRENT_USER_START, getCurrentUser)]);
  yield all([takeLatest(TYPES.LOGIN_START, login)]);
  yield all([takeLatest(TYPES.SIGN_UP_START, signUp)]);
  yield all([takeLatest(TYPES.FORGOT_PASSWORD_START, forgotPassword)]);
  yield all([takeLatest(TYPES.GOOGLE_SIGIN_START, registerGoogleUser)]);
  yield all([takeLatest(TYPES.FACEBOOK_SIGIN_START, registerFacebookUser)]);
  yield all([takeLatest(TYPES.APPLE_SIGIN_START, registerAppleUser)]);
  yield all([takeLatest(TYPES.EDIT_PROFILE_START, editProfile)]);
  yield all([takeLatest(TYPES.ADD_ADDRESS, addAddress)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_SIZES, getProductSizes)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_STYLES, getProductStyles)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_DESIGNERS, getProductDesigner)]);
  yield all([takeLatest(TYPES.UPDATE_INTERESTS, updateInterests)]);
  yield all([takeLatest(TYPES.EDIT_ADDRESS, editAddress)]);
  yield all([takeLatest(TYPES.CARD_SETUP_INTENT, cardSetUpIntent)]);
  yield all([takeLatest(TYPES.ADD_CARD, addCard)]);
  yield all([takeLatest(TYPES.GET_USER_CARDS, getUserCards)]);
  yield all([takeLatest(TYPES.VERIFY_EMAIL, verifyEmail)]);
  yield all([takeLatest(TYPES.SEND_EMAIL_VERIFICATION_OTP, sendOtp)]);
  yield all([
    takeLatest(TYPES.VERIFY_FORGOT_PASSWORD_OTP, verifyForgotPasswordOtp),
  ]);
  yield all([takeLatest(TYPES.SET_NEW_PASSWORD, setNewPassword)]);
  yield all([takeLatest(TYPES.GET_FAQS, getFaqs)]);
  yield all([takeLatest(TYPES.GET_SITE_SETTING, getSiteSettings)]);
  yield all([takeLatest(TYPES.GET_CATEGORIES, getCategories)]);
  yield all([takeLatest(TYPES.GET_SUB_CATEGORIES, getSubCategories)]);
  yield all([takeLatest(TYPES.GET_DESIGNERS, getDesigners)]);
  yield all([takeLatest(TYPES.GET_SIZES, getSizes)]);
  yield all([takeLatest(TYPES.GET_CONDITIONS, getConditions)]);
  yield all([
    takeLatest(TYPES.GET_PRODUCT_SHIPPING_TYPE, getProductShippingTypes),
  ]);
  yield all([takeLatest(TYPES.PRE_SIGNED_URL, preSignedURL)]);
  yield all([takeLatest(TYPES.CREATE_PRODUCT, createProduct)]);
  yield all([takeLatest(TYPES.UPDATE_PRODUCT, updateProduct)]);
  yield all([takeLatest(TYPES.GET_PRODUCT, getProduct)]);
  yield all([takeLatest(TYPES.GET_LIKED_PRODUCTS, getLikedProducts)]);
  yield all([
    takeLatest(TYPES.GET_CURRENT_USER_PRODUCTS, getCurrentUserProducts),
  ]);
  yield all([takeLatest(TYPES.GET_USER_PROFILE, getUserProfile)]);
  yield all([takeLatest(TYPES.CREATE_LIKE_PRODUCT, createLikeProduct)]);
  yield all([takeLatest(TYPES.DELETE_LIKED_PRODUCT, deleteLikedProduct)]);
  yield all([takeLatest(TYPES.FOLLOW_START, followUser)]);
  yield all([takeLatest(TYPES.UNFOLLOW_START, unfollowUser)]);
  yield all([takeLatest(TYPES.GET_CURRENT_USER_CART, getCurrentUserCart)]);
  yield all([takeLatest(TYPES.ADD_PRODUCT_TO_CART, addProductToCart)]);
  yield all([takeLatest(TYPES.GET_CLOSET_POLICIES, getClosetPolicies)]);
  yield all([
    takeLatest(TYPES.TURN_ON_OFF_NOTIFICATION, turnOnOffNotification),
  ]);
  yield all([
    takeLatest(TYPES.REMOVE_PRODUCT_FROM_CART, removeProductFromCart),
  ]);
  yield all([takeLatest(TYPES.GET_PRODUCT_INFO, getProductInfo)]);
  yield all([takeLatest(TYPES.LOGOUT_USER, logoutUser)]);
  yield all([takeLatest(TYPES.GET_FEED, getFeed)]);
  yield all([takeLatest(TYPES.CREATE_ORDER, createOrder)]);
  yield all([takeLatest(TYPES.UPDATE_SHIPPING, updateShipping)]);
  yield all([takeLatest(TYPES.GET_ORDERS, getOrders)]);
  yield all([takeLatest(TYPES.GET_ORDER_INFO, getOrderInfo)]);
  yield all([takeLatest(TYPES.GET_CLOSET_ORDER_INFO, getClosetOrderInfo)]);
  yield all([takeLatest(TYPES.GET_OCCASION, getOccasion)]);
  yield all([takeLatest(TYPES.GET_MOST_LIKED_PRODUCT, getMostLikedProduct)]);

  yield all([takeLatest(TYPES.GET_RECENT_SEARCH, getRecentSearch)]);
  yield all([takeLatest(TYPES.GET_SAVED_SEARCH, getSavedSearch)]);
  yield all([takeLatest(TYPES.GET_SEARCHED_PRODUCTS, searchProductsByKeyword)]);
  yield all([
    takeLatest(TYPES.GET_ORDERS_FOR_CURRENT_CLOSET, getOrdersForCurrentCloset),
  ]);
  yield all([takeLatest(TYPES.GET_RENTER_OPTIONS, getRenterOptions)]);
  yield all([
    takeLatest(TYPES.GET_BRANDS_WE_LOVE_PRODUCTS, getBrandsWeLoveProducts),
  ]);
  yield all([takeLatest(TYPES.GET_BUYER_OPTIONS, getBuyerOptions)]);
  yield all([takeLatest(TYPES.GET_LENDER_OPTIONS, getLenderOptions)]);
  yield all([takeLatest(TYPES.GET_SELLER_OPTIONS, getSellerOptions)]);
  yield all([takeLatest(TYPES.RATE_ORDER, rateOrder)]);
  yield all([takeLatest(TYPES.UPDATE_ORDER_RATING, updateOrderRating)]);
  yield all([takeLatest(TYPES.GET_MY_REVIEWS, getReviews)]);
  yield all([takeLatest(TYPES.GET_MESSAGE, getMessages)]);
  yield all([takeLatest(TYPES.CREATE_MESSAGE, createMessage)]);
  yield all([takeLatest(TYPES.GET_ROOMS, getRooms)]);
  yield all([takeLatest(TYPES.CREATE_ROOM, createRoom)]);
  yield all([takeLatest(TYPES.APPROVE_REVIEWED_IMAGES, approveReviewedImages)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_RATINGS, getProductRatings)]);
  yield all([
    takeLatest(TYPES.FIND_USERS_WITH_PHONE_NUMBERS, findUsersWithPhoneNumbers),
  ]);
  yield all([takeLatest(TYPES.DELETE_SAVED_SEARCH, deleteSavedSearch)]);
  yield all([takeLatest(TYPES.GET_PRODUCT_COLOR, getProductColor)]);
}
