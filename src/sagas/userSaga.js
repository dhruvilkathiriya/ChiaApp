import {Alert} from 'react-native';
import {put, call} from 'redux-saga/effects';

import * as userActions from '../actions/userActions';
import {api, GET, POST} from '../helper/apiConstants';
import {authToken, isLoggedIn, userInfo} from '../helper/constants';
import {makeAPIRequest, setAsyncStorageData} from '../helper/global';
import {strings} from '../helper/strings';
import {
  navigate,
  resetNavigationRoute,
} from '../navigation/navigationsServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleToast from 'react-native-simple-toast';

export function* getCurrentUser(action) {
  const options = {
    method: GET,
    url: api.currentUser,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    setAsyncStorageData(userInfo, res?.data?.user);
    yield put(userActions.setUserdata(res?.data?.user));
    resetNavigationRoute('HomeTab');
  } catch (error) {
    yield put(userActions.setUserdata(action?.data || {}));
    resetNavigationRoute('HomeTab');
  }
}

export function* signUp(action) {
  const options = {
    method: POST,
    url: api.signUp,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.signUpSuccess(res?.data.user));
    navigate('VerifyEmail', {email: res?.data?.user?.email});
    Alert.alert(res?.data?.message || strings.pleaseVerifyEmailAndLogin);
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.signUpFailure());
  }
}

export function* login(action) {
  const options = {
    method: POST,
    url: api.login,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    setAsyncStorageData(isLoggedIn, true);
    setAsyncStorageData(userInfo, res?.data?.user);
    setAsyncStorageData(authToken, res?.data?.tokens);
    yield put(userActions.loginSuccess(res?.data?.user));
    resetNavigationRoute('HomeTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.loginFailure());
  }
}

export function* registerGoogleUser(action) {
  const options = {
    method: POST,
    url: api.google,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.registerGoogleUserSuccess(res?.data?.user));
    setAsyncStorageData(isLoggedIn, true);
    setAsyncStorageData(userInfo, res?.data?.user);
    setAsyncStorageData(authToken, res?.data?.token);
    resetNavigationRoute('HomeTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.registerGoogleUserFailure(error));
  }
}

export function* registerFacebookUser(action) {
  const options = {
    method: POST,
    url: api.facebook,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.registerGoogleUserSuccess(res?.data?.user));
    setAsyncStorageData(isLoggedIn, true);
    setAsyncStorageData(userInfo, res?.data?.user);
    setAsyncStorageData(authToken, res?.data?.token);
    resetNavigationRoute('HomeTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.registerGoogleUserFailure(error));
  }
}

export function* registerAppleUser(action) {
  const options = {
    method: POST,
    url: api.apple,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.registerAppleUserSuccess(res?.data?.user));
    setAsyncStorageData(isLoggedIn, true);
    setAsyncStorageData(userInfo, res?.data?.user);
    setAsyncStorageData(authToken, res?.data?.token);
    resetNavigationRoute('HomeTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.registerAppleUserFailure(error));
  }
}

export function* forgotPassword(action) {
  const options = {
    method: POST,
    url: api.forgotPassword,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    Alert.alert(res?.data?.message || strings.codeSent, '');
    yield put(userActions.forgotPasswordSuccess(res?.data?.user));
    navigate('VerifyForgotPasswordOtp', {email: action?.data?.email});
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.forgotPasswordFailure());
  }
}

export function* verifyEmail(action) {
  const options = {
    method: POST,
    url: api.verifyEmail,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    // yield put(userActions.verifyEmailSuccess(res?.data));
    // Alert.alert('email verified successfully');
    // resetNavigationRoute('Login');
    setAsyncStorageData(isLoggedIn, true);
    setAsyncStorageData(userInfo, res?.data?.user);
    setAsyncStorageData(authToken, res?.data?.tokens);
    yield put(userActions.verifyEmailSuccess(res?.data?.user));
    resetNavigationRoute('HomeTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.verifyEmailFailure());
  }
}

export function* sendOtp(action) {
  const options = {
    method: POST,
    url: api.sendOtp,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.sendOtpSuccess(res?.data));
    Alert.alert('otp sent successfully');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.sendOtpFailure());
  }
}

export function* verifyForgotPasswordOtp(action) {
  const options = {
    method: POST,
    url: api.verifyForgotPasswordOtp,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.verifyForgotPasswordOtpSuccess(res?.data));
    navigate('ResetPassword', {data: action?.data});
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.verifyForgotPasswordOtpFailure());
  }
}

export function* setNewPassword(action) {
  const options = {
    method: POST,
    url: api.resetPassword,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.setNewPasswordSuccess(res?.data));
    resetNavigationRoute('Login');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.setNewPasswordFailure());
  }
}

export function* getUserProfile(action) {
  const options = {
    method: GET,
    url: api.userProfile + action?.data?.userId,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(userActions.getUserProfileSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(userActions.getUserProfileFailure());
  }
}

export function* logoutUser(action) {
  const options = {
    method: POST,
    url: api.logout,
    data: action?.data,
  };
  try {
    yield call(makeAPIRequest, options);
    yield put(userActions.logoutUserSuccess());
    yield put(userActions.resetReduxStore());
    yield AsyncStorage.removeItem(authToken);
    yield AsyncStorage.removeItem(userInfo);
    yield setAsyncStorageData(isLoggedIn, false);
    SimpleToast.show('Logout successfully.');
    resetNavigationRoute('Login');
  } catch (error) {
    yield put(userActions.logoutUserFailure());
  }
}
