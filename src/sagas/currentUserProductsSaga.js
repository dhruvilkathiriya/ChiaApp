import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {api, GET} from '../helper/apiConstants';
import * as currentUserProductAction from '../actions/currentUserProductAction';
import {makeAPIRequest} from '../helper/global';

export function* getCurrentUserProducts(action) {
  const options = {
    method: GET,
    url: api.currentUserProducts,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(
      currentUserProductAction.getCurrentUserProductsSuccess(res?.data),
    );
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(currentUserProductAction.getCurrentUserProductsFailure());
  }
}
