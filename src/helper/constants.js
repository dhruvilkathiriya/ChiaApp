import {Platform, Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = val => widthPercentageToDP(val);

export const hp = val => heightPercentageToDP(val);

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

/**
 * Asyncstorage constants
 */
export const authToken = 'authToken';
export const isLoggedIn = 'isLoggedIn';
export const userInfo = 'userInfo';
export const deviceToken = 'deviceToken';
