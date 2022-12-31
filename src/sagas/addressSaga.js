import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {POST, api, PUT} from '../helper/apiConstants';
import * as addressAction from '../actions/addressAction';
import * as userActions from '../actions/userActions';
import {makeAPIRequest} from '../helper/global';
import {goToPreviousScreen, navigate} from '../navigation/navigationsServices';

export function* addAddress(action) {
  const options = {
    method: POST,
    url: api.addAddress,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(addressAction.addAddressSuccess());
    yield put(userActions.setUserdata(res?.data?.user));
    Alert.alert('', 'Addess added successfully!');
    goToPreviousScreen();
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(addressAction.addAddressFailure());
  }
}

export function* editAddress(action) {
  const options = {
    method: PUT,
    url: api.addAddress + `/${action?.addressID}`,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(addressAction.addAddressSuccess());
    yield put(userActions.setUserdata(res?.data?.user));
    Alert.alert('', 'Addess updated successfully!');
    goToPreviousScreen();
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(addressAction.addAddressFailure());
  }
}
