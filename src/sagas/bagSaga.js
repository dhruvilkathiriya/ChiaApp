import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {api, GET, POST} from '../helper/apiConstants';
import * as bagAction from '../actions/bagAction';
import {makeAPIRequest} from '../helper/global';
import SimpleToast from 'react-native-simple-toast';

export function* getCurrentUserCart() {
  const options = {
    method: GET,
    url: api.carts,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(bagAction.getCurrentUserCartSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(bagAction.getCurrentUserCartFailure());
  }
}

export function* addProductToCart(action) {
  const options = {
    method: POST,
    url: api.carts,
    data: action?.data?.data || {},
  };
  try {
    yield call(makeAPIRequest, options);
    yield put(bagAction.addProductToCartSuccess());
    if (
      action?.data?.onSuccess &&
      typeof action?.data?.onSuccess === 'function'
    ) {
      action?.data?.onSuccess();
    }
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(bagAction.removeProductFromCartFailure());
  }
}

export function* removeProductFromCart(action) {
  const options = {
    method: POST,
    url: api.carts + api.removeProduct,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(bagAction.removeProductFromCartSuccess(res?.data));
    SimpleToast.show('item removed successfully');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(bagAction.removeProductFromCartFailure());
  }
}

export function* updateShipping(action) {
  const options = {
    method: POST,
    url: api.carts + api.updateShipping,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(bagAction.updateShippingSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(bagAction.updateShippingFailure());
  }
}
