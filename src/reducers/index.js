import {combineReducers} from 'redux';
// Reducers
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import addressReducer from './addressReducer';
import interestsReducer from './interestsReducer';
import cardSetUpIntentReducer from './cardSetUpIntentReducer';
import addCardReducer from './addCardReducer';
import userCardsReducer from './userCardsReducer';
import faqsReducer from './faqsReducer';
import siteSettingsReducer from './siteSettingsReducer';
import categoriesReducer from './categoriesReducer';
import subCategoriesReducer from './subCategoriesReducer';
import designersReducer from './designersReducer';
import sizesReducer from './sizesReducer';
import conditionsReducer from './conditionsReducer';
import shippingReducer from './shippingReducer';
import awsS3Reducer from './awsS3Reducer';
import listingReducer from './listingReducer';
import productReducer from './productReducer';
import myHeartsReducer from './myHeartsReducer';
import currentUserProductsReducer from './currentUserProductsReducer';
import userProfileReducer from './userProfileReducer';
import followUnfollowReducer from './followUnfollowReducer';
import bagReducer from './bagReducer';
import closetPoliciesReducer from './closetPoliciesReducer';
import notificationReducer from './notificationReducer';
import productInfoReducer from './productInfoReducer';
import feedReducer from './feedReducer';
import orderReducer from './orderReducer';
import discoverReducer from './discoverReducer';
import searchReducer from './searchReducer';
import transactionReducer from './transactionReducer';
import ratingReducer from './ratingReducer';
import myReviewsReducer from './myReviewsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  address: addressReducer,
  interests: interestsReducer,
  cardSetUpIntentReducer: cardSetUpIntentReducer,
  addCardReducer: addCardReducer,
  userCards: userCardsReducer,
  faqsReducer: faqsReducer,
  siteSettingsReducer: siteSettingsReducer,
  categories: categoriesReducer,
  subCategories: subCategoriesReducer,
  designers: designersReducer,
  sizes: sizesReducer,
  conditions: conditionsReducer,
  shipping: shippingReducer,
  awsS3: awsS3Reducer,
  listing: listingReducer,
  product: productReducer,
  myHearts: myHeartsReducer,
  currentUserProducts: currentUserProductsReducer,
  userProfile: userProfileReducer,
  followUnfollow: followUnfollowReducer,
  bag: bagReducer,
  closetPolicies: closetPoliciesReducer,
  notification: notificationReducer,
  productInfo: productInfoReducer,
  feed: feedReducer,
  order: orderReducer,
  discover: discoverReducer,
  search: searchReducer,
  transaction: transactionReducer,
  rating: ratingReducer,
  myReviews: myReviewsReducer,
  messages: messagesReducer,
});
