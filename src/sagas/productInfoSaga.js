import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {api, GET} from '../helper/apiConstants';
import * as productAction from '../actions/productAction';
import {makeAPIRequest} from '../helper/global';

export function* getProductInfo(action) {
  const options = {
    method: GET,
    url: api.products + `/${action?.data?.itemID}`,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(productAction.getProductInfoSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(productAction.getProductInfoFailure());
  }
}
