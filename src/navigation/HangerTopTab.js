import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {style} from './styles';
import {colors} from '../helper/colors';
import {Header} from '../components';

//screens
import YourCloset from '../screens/yourCloset';
import EditCloset from '../screens/editCloset';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  const tabOptions = {
    activeColor: colors.primaryColor,
    inactiveColor: colors.placeholderText,
    indicatorStyle: style.indicatorStyle,
    style: style.hangerTabContainerStyle,
    labelStyle: style.labelStyle,
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen name={'YOUR CLOSET'} component={YourCloset} />
      <Tab.Screen name={'EDIT CLOSET'} component={EditCloset} />
    </Tab.Navigator>
  );
};

const HangerTopTab = () => (
  <>
    <Header />
    <TopTab />
  </>
);

export default HangerTopTab;
