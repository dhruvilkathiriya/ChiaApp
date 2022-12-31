import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {api, DELETE, GET, POST} from '../helper/apiConstants';
import * as myHeartsAction from '../actions/myHeartsAction';
import {makeAPIRequest} from '../helper/global';

export function* getLikedProducts(action) {
  const options = {
    method: GET,
    url: api.likedProducts,
    params: {page: action?.data?.page || 1},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(myHeartsAction.getLikedProductsSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(myHeartsAction.getLikedProductsFailure());
  }
}

export function* createLikeProduct(action) {
  const options = {
    method: POST,
    url: api.createLike + action?.data?.item?.id,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(myHeartsAction.createLikeProductSuccess(action?.data?.item));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(myHeartsAction.createLikeProductFailure());
  }
}

export function* deleteLikedProduct(action) {
  const options = {
    method: DELETE,
    url: api.createLike + action?.data?.itemID,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(myHeartsAction.deleteLikedProductSuccess(action?.data?.itemID));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(myHeartsAction.deleteLikedProductFailure());
  }
}
