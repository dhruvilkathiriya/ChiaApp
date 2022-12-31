import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';

import {api, GET, POST} from '../helper/apiConstants';
import {makeAPIRequest} from '../helper/global';
import {strings} from '../helper/strings';
import * as orderAction from '../actions/orderAction';

export function* createOrder() {
  const options = {
    method: POST,
    url: api.order,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(orderAction.createOrderSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(orderAction.createOrderFailure());
  }
}

export function* getOrders(action) {
  const options = {
    method: GET,
    url: api.ordersList,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(
      orderAction.getOrdersSuccess({
        ...res?.data,
        type: action?.data?.type,
      }),
    );
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(orderAction.getOrdersFailure());
  }
}

export function* getOrderInfo(action) {
  const options = {
    method: GET,
    url: api.ordersList + '/' + action?.data.orderId,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(orderAction.getOrderInfoSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(orderAction.getOrderInfoFailure());
  }
}

export function* getOrdersForCurrentCloset(action) {
  const options = {
    method: GET,
    url: api.currentClosetOrders,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(orderAction.getOrdersForCurrentClosetSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(orderAction.getOrdersForCurrentClosetFailure());
  }
}

export function* getClosetOrderInfo(action) {
  const options = {
    method: GET,
    url: api.currentClosetOrders + '/' + action?.data.orderId,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(orderAction.getClosetOrderInfoSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(orderAction.getClosetOrderInfoFailure());
  }
}
