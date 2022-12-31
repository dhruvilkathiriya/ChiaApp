import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as siteSettingsAction from '../actions/siteSettingsActions';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getSiteSettings(action) {
  const options = {
    method: GET,
    url: api.siteSettings,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(siteSettingsAction.getSiteSettingsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(siteSettingsAction.getSiteSettingsFailure());
  }
}
