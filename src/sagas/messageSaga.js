import {Alert} from 'react-native';
import {put, call} from 'redux-saga/effects';

import * as messageActions from '../actions/messageActions';
import {api, GET, POST} from '../helper/apiConstants';
import {makeAPIRequest} from '../helper/global';
import {strings} from '../helper/strings';

export function* getMessages(action) {
  const options = {
    method: GET,
    url: api.messages + `/${action?.data?.roomId}`,
    params: {
      limit: action?.data?.limit,
      sort: '-createdAt',
      page: action?.data?.page,
    },
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(messageActions.getMessagesSuccess(res?.data || []));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(messageActions.getMessagesFailure());
  }
}

export function* createMessage(action) {
  const options = {
    method: POST,
    url: api.messages,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(messageActions.createMessageSuccess());
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(messageActions.createMessageFailure());
  }
}

export function* getRooms() {
  const options = {
    method: GET,
    url: api.rooms,
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(messageActions.getRoomsSuccess(res?.data || []));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(messageActions.getRoomsFailure());
  }
}

export function* createRoom(action) {
  const options = {
    method: POST,
    url: api.rooms,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);
    yield put(messageActions.createRoomSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(messageActions.createRoomFailure());
  }
}
