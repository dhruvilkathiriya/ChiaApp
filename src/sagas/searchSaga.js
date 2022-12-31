import {Alert} from 'react-native';
import {call, put} from 'redux-saga/effects';
import _ from 'lodash';

import {strings} from '../helper/strings';
import {api, DELETE, GET} from '../helper/apiConstants';
import {makeAPIRequest} from '../helper/global';
import * as searchActions from '../actions/searchActions';

export function* getRecentSearch() {
  const options = {
    method: GET,
    url: api.recentSearch,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(searchActions.getRecentSearchSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(searchActions.getRecentSearchFailure());
  }
}

export function* getSavedSearch() {
  const options = {
    method: GET,
    url: api.savedSearch,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(searchActions.getSavedSearchSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(searchActions.getSavedSearchFailure());
  }
}

export function* searchProductsByKeyword(action) {
  const options = {
    method: GET,
    url: api.products,
    params: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(searchActions.getSearchedProductsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(searchActions.getSearchedProductsFailure());
  }
}

export function* deleteSavedSearch(action) {
  const options = {
    method: DELETE,
    url: api.search + action?.data?.itemID,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(searchActions.deleteSavedSearchSuccess(action?.data?.itemID));
  } catch (error) {
    console.log(error);
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(searchActions.deleteSavedSearchFailure());
  }
}
