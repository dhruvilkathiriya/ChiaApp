import {Alert} from 'react-native';
import {put, call} from 'redux-saga/effects';

import * as userActions from '../actions/userActions';
import * as profileActions from '../actions/profileActions';
import {api, GET, PUT} from '../helper/apiConstants';
import {makeAPIRequest, setAsyncStorageData} from '../helper/global';
import {strings} from '../helper/strings';
import {userInfo} from '../helper/constants';
import SimpleToast from 'react-native-simple-toast';

export function* editProfile(action) {
  let editMode = action?.data?.editMode || '';
  delete action?.data?.editMode;
  const options = {
    method: PUT,
    url: api.editProfile,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    setAsyncStorageData(userInfo, res?.data?.user);
    yield put(userActions.setUserdata(res?.data?.user));
    yield put(profileActions.editProfileSuccess());
    if (editMode === 'editClosetPolicy') {
      SimpleToast.show('Your Closet Policy updated successfully');
    } else if (editMode === 'editVacationMode') {
      SimpleToast.show(
        res?.data?.user?.vacationMode
          ? 'Turned On Vacation Mode'
          : 'Turned Off Vacation Mode',
      );
    } else if (editMode === 'editProfileImageMode') {
      SimpleToast.show('Profile Photo Updated Successfully.');
    } else if (editMode === 'uploadImageMode') {
    } else if (editMode === 'includeSecurityBadges') {
    } else {
      Alert.alert(strings.success, strings.profileUpdatedSuccessfully);
    }
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(profileActions.editProfileFailure());
  }
}

export function* getProfile(action) {
  const options = {
    method: GET,
    url: api.getProfile,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    setAsyncStorageData(userInfo, res?.data?.user);
    yield put(userActions.setUserdata(res?.data?.user));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(profileActions.getProfileFailure());
  }
}
