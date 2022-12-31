import {Alert} from 'react-native';
import {strings} from '../helper/strings';
import {call, put} from 'redux-saga/effects';
import {POST, PUT, api} from '../helper/apiConstants';
import * as awsS3Action from '../actions/awsS3Actions';
import {makeAPIRequest} from '../helper/global';
import {navigate} from '../navigation/navigationsServices';
import RNFetchBlob from 'rn-fetch-blob';

export function* preSignedURL(action) {
  const data = action.data.uri;
  delete action.data.uri;
  const options = {
    method: POST,
    url: api.awsPresigned,
    data: action?.data || {},
  };
  try {
    const res = yield call(makeAPIRequest, options);

    const response = yield call(() => {
      return new Promise((resolve, reject) => {
        RNFetchBlob.fetch(
          'PUT',
          `${res.data.url}`,
          {'Content-Type': 'octet-stream'},
          RNFetchBlob.wrap(data),
        )
          .uploadProgress((written, total) => {
            console.log('fetch_put_uploaded', written / total);
          })
          .then(data => {
            console.log('fetch_put', data);
            resolve(data);
          })
          .catch(error => {
            console.log('fetch_put_error', error);
            reject(error);
          });
      });
    });
    yield put(awsS3Action.preSignedURLSuccess(res?.data));
  } catch (error) {
    Alert.alert(
      error?.response?.data?.message ||
        `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
    );
    yield put(awsS3Action.preSignedURLFailure());
  }
}
