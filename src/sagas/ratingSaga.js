import {api, GET, POST, PUT} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as ratingAction from '../actions/ratingAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import * as awsS3Actions from '../actions/awsS3Actions';
import SimpleToast from 'react-native-simple-toast';

export function* getRenterOptions() {
  const options = {
    method: GET,
    url: api.getRenterOption,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getRenterOptionsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getRenterOptionsFailure());
  }
}

export function* getBuyerOptions() {
  const options = {
    method: GET,
    url: api.getBuyerOption,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getBuyerOptionsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getBuyerOptionsFailure());
  }
}

export function* getLenderOptions() {
  const options = {
    method: GET,
    url: api.getLenderOption,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getLenderOptionsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getLenderOptionsFailure());
  }
}

export function* getSellerOptions() {
  const options = {
    method: GET,
    url: api.getSellerOption,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getSellerOptionsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getSellerOptionsFailure());
  }
}

export function* rateOrder(action) {
  const options = {
    method: POST,
    url: api.rateOrder,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.rateOrderSuccess(res?.data));
    yield put(awsS3Actions.resetPreSignedUrl());
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.rateOrderFailure());
  }
}

export function* updateOrderRating(action) {
  let ratingId = action?.data?.ratingId;
  delete action?.data?.ratingId;
  const options = {
    method: PUT,
    url: api.rateOrder + `/${ratingId}`,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.updateOrderRatingSuccess(res?.data));
    yield put(awsS3Actions.resetPreSignedUrl());
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.updateOrderRatingFailure());
  }
}

export function* getReviews(action) {
  const options = {
    method: GET,
    url: api.myReviews,
    params: action?.data,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getReviewsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getReviewsFailure());
  }
}

export function* approveReviewedImages(action) {
  const options = {
    method: POST,
    url:
      api.approveReviewedImages +
      `/${action?.data?.ratingId}/${action?.data?.imageId}`,
    params: {approve: action?.data?.approved},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.approveReviewedImagesSuccess(res?.data));
    SimpleToast.show(
      action?.data?.approved ? 'image approved' : 'image disapproved',
    );
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.approveReviewedImagesFailure());
  }
}

export function* getProductRatings(action) {
  const options = {
    method: GET,
    url: api.getProductRatings + `/${action?.data?.productId}`,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(ratingAction.getProductRatingsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(ratingAction.getProductRatingsFailure());
  }
}
