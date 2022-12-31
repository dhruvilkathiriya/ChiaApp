import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as shippingActions from '../actions/listingActions';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getProductShippingTypes(action) {
  const options = {
    method: GET,
    url: api.shipping,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(shippingActions.getProductShippingTypesSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(shippingActions.getProductShippingTypesFailure());
  }
}
