import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as designersActions from '../actions/listingActions';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getDesigners() {
  const options = {
    method: GET,
    url: api.productDesigner,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(designersActions.getDesignersSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(designersActions.getDesignersFailure());
  }
}
