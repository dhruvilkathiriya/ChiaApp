import {api, POST, PUT} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as creatProductActions from '../actions/listingActions';
import * as awsS3Actions from '../actions/awsS3Actions';
import {
  goToPreviousScreen,
  resetNavigationRoute,
} from '../navigation/navigationsServices';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* createProduct(action) {
  const options = {
    method: POST,
    url: api.createProduct,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(creatProductActions.createProductSuccess(res?.data));
    yield put(awsS3Actions.resetPreSignedUrl());
    Alert.alert('Product listed successfully');
    resetNavigationRoute('HangerTopTab');
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(creatProductActions.createProductFailure());
  }
}

export function* updateProduct(action) {
  let productId = action?.data?.productId;
  delete action?.data?.productId;
  const options = {
    method: PUT,
    url: api.createProduct + `/${productId}`,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(creatProductActions.updateProductSuccess(res?.data));
    Alert.alert('Product updated successfully');
    goToPreviousScreen();
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(creatProductActions.updateProductFailure());
  }
}
