import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

import {getAsyncStorageData} from '../../helper/global';
import {isLoggedIn, userInfo} from '../../helper/constants';
import {colors} from '../../helper/colors';
import {style} from './styles';
import {getCurrentUser} from '../../actions/userActions';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const Loading = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = async () => {
    const isUserLogin = await getAsyncStorageData(isLoggedIn);
    const userData = await getAsyncStorageData(userInfo);
    if (isUserLogin) {
      dispatch(getCurrentUser(userData));
    } else {
      resetNavigationRoute('HomeTab');
    }
  };

  return (
    <View style={style.mainContainer}>
      <ActivityIndicator size={'large'} color={colors.primaryColor} />
    </View>
  );
};

export default Loading;
