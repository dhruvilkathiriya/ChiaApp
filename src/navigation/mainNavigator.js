import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Loading from '../screens/loading';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ForgotPassword from '../screens/forgotPassword';
import ResetPassword from '../screens/resetPassword';
import VerifyEmail from '../screens/verifyEmail';
import VerifyForgotPasswordOtp from '../screens/verifyForgotPasswordOtp';
import DrawerNavigator from './drawerNavigation';

const Stack = createStackNavigator();

const MainNavigator = ({refer}) => {
  return (
    <NavigationContainer ref={refer}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Loading'} component={Loading} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Stack.Screen name={'ResetPassword'} component={ResetPassword} />
        <Stack.Screen name={'VerifyEmail'} component={VerifyEmail} />
        <Stack.Screen
          name={'VerifyForgotPasswordOtp'}
          component={VerifyForgotPasswordOtp}
        />
        <Stack.Screen name={'HomeTab'} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
