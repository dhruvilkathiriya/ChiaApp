import {Alert} from 'react-native';
import {put, call} from 'redux-saga/effects';

import * as userActions from '../actions/userActions';
import * as interestsActions from '../actions/interestsActions';
import {api, GET, POST} from '../helper/apiConstants';
import {authToken, isLoggedIn, userInfo} from '../helper/constants';
import {makeAPIRequest, setAsyncStorageData} from '../helper/global';
import {strings} from '../helper/strings';

export function* getProductSizes() {
  const options = {
    method: GET,
    url: api.productSize,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(interestsActions.getProductSizesSuccess(res?.data || []));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(interestsActions.getProductSizesFailure());
  }
}

export function* getProductStyles() {
  const options = {
    method: GET,
    url: api.productStyle,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(interestsActions.getProductStylesSuccess(res?.data || []));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(interestsActions.getProductStylesFailure());
  }
}

export function* getProductDesigner(action) {
  const params = {search: action?.data?.search || ''};
  const options = {
    method: GET,
    url: api.productDesigner,
    params,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(interestsActions.getProductDesignerSuccess(res?.data || []));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(interestsActions.getProductDesignerFailure());
  }
}

export function* updateInterests(action) {
  const options = {
    method: POST,
    url: api.updateInterests,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    setAsyncStorageData(userInfo, res?.data?.user);
    yield put(userActions.setUserdata(res?.data?.user));
    yield put(interestsActions.updateInterestsSuccess());
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(interestsActions.updateInterestsFailure());
  }
}
