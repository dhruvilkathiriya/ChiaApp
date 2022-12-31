import {api, POST} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as notificationAction from '../actions/notificationAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* turnOnOffNotification(action) {
  const options = {
    method: POST,
    url: api.notification,
    data: action?.data,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(notificationAction.turnOnOffNotificationSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(notificationAction.turnOnOffNotificationFailure());
  }
}
