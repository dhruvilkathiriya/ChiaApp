import {api, GET, POST} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as faqsActions from '../actions/faqsAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getFaqs(action) {
  const options = {
    method: GET,
    url: api.faqs,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(faqsActions.getFaqsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(faqsActions.getFaqsFailure());
  }
}

export function* findUsersWithPhoneNumbers(action) {
  const options = {
    method: POST,
    url: api.findUsersWithPhoneNumbers,
    data: action?.data,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(faqsActions.findUsersWithPhoneNumbersSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(faqsActions.findUsersWithPhoneNumbersFailure());
  }
}
