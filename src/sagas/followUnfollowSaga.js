import {api, DELETE, POST} from '../helper/apiConstants';
import {call, put} from 'redux-saga/effects';
import {makeAPIRequest} from '../helper/global';
import * as followUnfollowAction from '../actions/followUnfollowAction';
import {Alert} from 'react-native';
import {strings} from '../helper/strings';

export function* followUser(action) {
  const options = {
    method: POST,
    url: api.follow,
    data: action?.data,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(followUnfollowAction.followUserSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(followUnfollowAction.followUserFailure());
  }
}

export function* unfollowUser(action) {
  const options = {
    method: DELETE,
    url: api.unfollow + action?.data?.following,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(followUnfollowAction.unfollowUserSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(followUnfollowAction.unfollowUserFailure());
  }
}
