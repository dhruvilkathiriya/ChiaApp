import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as closetPoliciesAction from '../actions/closetPoliciesAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getClosetPolicies(action) {
  const options = {
    method: GET,
    url: api.closetPolicies,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(closetPoliciesAction.getClosetPoliciesSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(closetPoliciesAction.getClosetPoliciesFailure());
  }
}
