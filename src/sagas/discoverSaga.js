import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as discoverAction from '../actions/discoverAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getOccasion() {
  const options = {
    method: GET,
    url: api.getOccasion,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(discoverAction.getOccasionSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(discoverAction.getOccasionFailure());
  }
}

export function* getMostLikedProduct(action) {
  const options = {
    method: GET,
    url: api.mostLiked,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(discoverAction.getMostLikedProductSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(discoverAction.getMostLikedProductFailure());
  }
}

export function* getBrandsWeLoveProducts() {
  const options = {
    method: GET,
    url: api.brandWeLove,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(discoverAction.getBrandsWeLoveProductsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(discoverAction.getBrandsWeLoveProductsFailure());
  }
}
