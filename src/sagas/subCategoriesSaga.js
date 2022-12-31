import {api, GET} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as categoriesActions from '../actions/listingActions';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* getSubCategories(action) {
  const options = {
    method: GET,
    url: api.subCategories,
    params: {parent: action?.data?.categoryId},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(categoriesActions.getSubCategoriesSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(categoriesActions.getSubCategoriesSuccess());
  }
}
