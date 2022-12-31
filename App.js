import React, {useEffect, useState} from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import MainNavigator from './src/navigation/mainNavigator';
import {setTopLevelNavigator} from './src/navigation/navigationsServices';
import {setAsyncStorageData} from './src/helper/global';
import {deviceToken} from './src/helper/constants';
import {NoInternetConnection} from './src/components';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/reducers/store';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  const [isNetAvailable, setIsNetAvailable] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    checkPermission();
    GoogleSignin.configure({
      webClientId:
        '1041624978220-slhipgf049fcc47ttmu2f7tqaacel3td.apps.googleusercontent.com',
      offlineAccess: false,
      forceCodeForRefreshToken: true,
      iosClientId:
        '1041624978220-5urt9l81cqjuu743lj8902ilg99g526q.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetAvailable(state?.isConnected || false);
    });

    return unsubscribe;
  }, []);

  const setNavigationRef = navigatorRef => {
    setTopLevelNavigator(navigatorRef);
  };

  const checkPermission = async () => {
    const authorizationStatus = await messaging().hasPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      getFcmToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      getFcmToken();
    } else {
      console.log('Push notification permission rejected!');
    }
  };

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      // console.log('fcmToken :: ', fcmToken);
      setAsyncStorageData(deviceToken, fcmToken);
    } catch (error) {
      // console.log('fcmToken error :: ', error);
    }
  };

  const checkInternetConnection = async () => {
    try {
      const result = await NetInfo.fetch();
      setIsNetAvailable(result?.isConnected || false);
    } catch (error) {}
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <MainNavigator refer={setNavigationRef} />
        {!isNetAvailable && (
          <NoInternetConnection onTryAgainPress={checkInternetConnection} />
        )}
      </PersistGate>
    </Provider>
  );
};

export default App;
