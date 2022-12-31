import {api, GET, POST, PUT} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest, setAsyncStorageData} from '../helper/global';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import * as billingActions from '../actions/billingActions';
import {goToPreviousScreen} from '../navigation/navigationsServices';

export function* cardSetUpIntent(action) {
  const options = {
    method: GET,
    url: api.cardSetUpIntent,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(billingActions.cardSetUpIntentSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(billingActions.cardSetUpIntentFailure());
  }
}

export function* addCard(action) {
  const options = {
    method: POST,
    url: api.addCard,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(billingActions.addCardSuccess(res?.data));
    if (res?.status === 200) {
      const options = {
        method: GET,
        url: api.addCard,
      };
      try {
        const res = yield call(makeAPIRequest, options);
        yield put(billingActions.getUserCardsSuccess(res?.data));
        Alert.alert(
          strings.success,
          strings.cardAddedSuccessfully,
          [{text: 'OK', onPress: () => goToPreviousScreen()}],
          {cancelable: false},
        );
      } catch (error) {
        Alert.alert(
          error?.response?.data?.message ||
            `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
        );
        yield put(billingActions.getUserCardsFailure());
      }
    }
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(billingActions.addCardFailure());
  }
}

export function* getUserCards(action) {
  const options = {
    method: GET,
    url: api.addCard,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(billingActions.getUserCardsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(billingActions.getUserCardsFailure());
  }
}
