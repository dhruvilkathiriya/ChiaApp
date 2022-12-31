const GET = 'get';
const POST = 'post';
const PUT = 'PUT';
const DELETE = 'delete';

const baseURL = 'https://kcdz71ab75.execute-api.us-east-1.amazonaws.com/dev/';

const PUBLISHER_KEY =
  'pk_test_51J3i7vI8oH3pfFxBwnyLfuFTgnhqa5Z2p0Q5bmFy0cCD3fbzzecahh6i2QEm31OmX2M8j28NuELFRUZEnHqUXrZe00sbK0I0Qh';

const AUTH = '/api/v1/auth/';
const USER = '/api/v1/user/';
const PRODUCT = '/api/v1/product/';
const AWS = '/api/v1/s3/';
const ORDER = '/api/v1/orders';
const SEARCH = '/api/v1/search/';
const RATING = '/api/v1/ratings';
const MESSAGES = '/api/v1/messages';
const ROOMS = '/api/v1/rooms';

const api = {
  currentUser: `${AUTH}me`,
  login: `${AUTH}login`,
  signUp: `${AUTH}register`,
  google: `${AUTH}google`,
  facebook: `${AUTH}facebook`,
  apple: `${AUTH}apple`,
  forgotPassword: `${AUTH}forgot-password`,
  editProfile: `${AUTH}me`,
  refreshTokens: `${AUTH}refresh-tokens`,
  pusher: 'api/v1/auth/pusher',
  addAddress: `${USER}address`,
  productSize: `${PRODUCT}product-size`,
  productStyle: `${PRODUCT}product-style`,
  productDesigner: `${PRODUCT}designer`,
  cardSetUpIntent: `${USER}payment/secret`,
  addCard: `${USER}payment/card`,
  verifyEmail: `${AUTH}verify-otp`,
  sendOtp: `${AUTH}send-verify-otp`,
  updateInterests: `${USER}interests`,
  verifyForgotPasswordOtp: `${AUTH}verify-reset-otp`,
  resetPassword: `${AUTH}reset-password`,
  faqs: '/api/v1/faq',
  products: '/api/v1/product',
  carts: '/api/v1/cart',
  removeProduct: '/remove-product',
  updateShipping: '/update-shipping',
  siteSettings: '/api/v1/settings',
  categories: '/api/v1/categories',
  subCategories: '/api/v1/categories/sub',
  conditions: `${PRODUCT}condition`,
  shipping: `${PRODUCT}shipping`,
  awsPresigned: `${AWS}presignedurl`,
  createProduct: '/api/v1/product',
  likedProducts: `${PRODUCT}likes/user`,
  createLike: `${PRODUCT}likes/`,
  currentUserProducts: `${PRODUCT}user`,
  userProfile: `${USER}`,
  follow: '/api/v1/followers/follow-user',
  unfollow: '/api/v1/followers/',
  closetPolicies: `${USER}policies`,
  notification: '/api/v1/followers/turn-on-notification',
  updateDeviceToken: `${AUTH}update-device-token`,
  feed: `${PRODUCT}feed`,
  logout: `${AUTH}logout`,
  order: ORDER,
  ordersList: `${ORDER}/user`,
  currentClosetOrders: `${ORDER}/closet`,
  getOccasion: '/api/v1/occasions',
  mostLiked: `${PRODUCT}most-liked`,
  brandWeLove: `${PRODUCT}brand-we-love`,
  recentSearch: `${SEARCH}recent`,
  savedSearch: `${SEARCH}saved`,
  getRenterOption: `${RATING}/renter`,
  getBuyerOption: `${RATING}/buyer`,
  getLenderOption: `${RATING}/lender`,
  getSellerOption: `${RATING}/seller`,
  rateOrder: `${RATING}`,
  myReviews: `${RATING}/me`,
  messages: `${MESSAGES}`,
  rooms: `${ROOMS}`,
  search: `${SEARCH}`,
  approveReviewedImages: `${RATING}/images`,
  getProductRatings: `${RATING}/product`,
  findUsersWithPhoneNumbers: `${USER}find-users-phone`,
  getColor: `${PRODUCT}get-colors`,
};

export {baseURL, api, GET, POST, PUT, DELETE, PUBLISHER_KEY};
