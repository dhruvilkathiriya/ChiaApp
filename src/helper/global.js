import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api, baseURL, POST} from './apiConstants';
import {authToken, isLoggedIn} from './constants';
import {Alert} from 'react-native';

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
  ignoreAuth = false,
}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method: method,
      baseURL: baseURL,
      url: url,
      data: data,
      headers: headers,
      params: params,
    };
    const authorizationToken = await getAuthToken();
    if (authorizationToken && !ignoreAuth) {
      options.headers = {
        ...options.headers,
        Authorization: authorizationToken,
      };
    }
    await axios(options)
      .then(response => {
        //console.log(url, response);
        if ([200, 201, 204].includes(response.status)) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async error => {
        console.log('error', url, error?.response || error);
        if (error?.response?.data?.code === 401) {
          refreshAuthToken(options)
            .then(response => {
              if ([200, 201].includes(response.status)) {
                resolve(response);
              } else {
                reject(response);
              }
            })
            .catch(err => reject(err));
        } else {
          reject(error);
        }
      });
  });

export const refreshAuthToken = async ({method, url, data, headers, params}) =>
  new Promise(async (resolve, reject) => {
    const apiData = {
      refreshToken: await getRefreshToken(),
    };

    makeAPIRequest({
      method: POST,
      url: api.refreshTokens,
      data: apiData,
      ignoreAuth: true,
    })
      .then(async res => {
        await setAsyncStorageData(authToken, res?.data);
        makeAPIRequest({
          method,
          url,
          data,
          headers,
          params,
        })
          .then(res => resolve(res))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });

export const setAsyncStorageData = async (key, value) => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getAsyncStorageData = async key => {
  const data = await AsyncStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }
  return null;
};

export const getAuthToken = async () => {
  const data = await getAsyncStorageData(authToken);
  if (data) {
    return data?.access?.token ? `Bearer ${data?.access?.token}` : '';
  }
  return null;
};

export const getRefreshToken = async () => {
  const data = await getAsyncStorageData(authToken);
  if (data) {
    return data?.refresh?.token ? `${data?.refresh?.token}` : '';
  }
  return null;
};

export const getIsUserLogin = async () => {
  const data = await getAsyncStorageData(isLoggedIn);
  return data ? true : false;
};

export const loginAlert = () => {
  Alert.alert('Unauthorized!', 'Please login first.');
};
