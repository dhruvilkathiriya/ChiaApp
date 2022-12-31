import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as feedAction from '../actions/feedAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import _ from 'lodash';

export function* getFeed(action) {
  const options = {
    method: GET,
    url: api.feed,
    params: !_.isEmpty(action?.data) && {
      lastProduct: action?.data?.lastProduct,
    },
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(feedAction.getFeedSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(feedAction.getFeedFailure());
  }
}
