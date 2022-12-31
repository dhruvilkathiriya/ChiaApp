import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {api, GET} from '../helper/apiConstants';
import * as productAction from '../actions/productAction';
import {makeAPIRequest} from '../helper/global';

export function* getProduct(action) {
  const options = {
    method: GET,
    url: api.products,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(productAction.getProductSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(productAction.getProductFailure());
  }
}

export function* getProductColor() {
  const options = {
    method: GET,
    url: api.getColor,
    // params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(productAction.getProductColorSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(productAction.getProductColorFailure());
  }
}
