import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';

import {style} from './styles';
import {colors} from '../helper/colors';
import {Header} from '../components';

//screens
import Feed from '../screens/feed';
import Discover from '../screens/discover';
import {getIsUserLogin, loginAlert} from '../helper/global';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({isLogin}) => {
  const {navigate} = useNavigation();

  const tabOptions = {
    activeColor: colors.primaryColor,
    inactiveColor: colors.placeholderText,
    indicatorStyle: style.indicatorStyle,
    style: style.homeTabContainerStyle,
    labelStyle: style.labelStyle,
  };

  const listeners = {
    tabPress: e => {
      if (!isLogin) {
        e.preventDefault();
        loginAlert();
      }
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions} swipeEnabled={isLogin}>
      <Tab.Screen name={'DISCOVER'} component={Discover} />
      <Tab.Screen name={'FEED'} component={Feed} listeners={listeners} />
    </Tab.Navigator>
  );
};

const HomeTopTab = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function setLoginState() {
      const val = await getIsUserLogin();
      setIsLogin(val);
    }

    setLoginState();
  }, []);

  return (
    <>
      <Header />
      <TopTab isLogin={isLogin} />
    </>
  );
};

export default HomeTopTab;
