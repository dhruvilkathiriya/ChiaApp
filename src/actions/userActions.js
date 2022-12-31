import {Alert} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import SimpleToast from 'react-native-simple-toast';

import {strings} from '../helper/strings';
import * as TYPES from './types';

export function setUserdata(data) {
  return {type: TYPES.SET_USER_DATA, data};
}

export function getCurrentUser(data) {
  return {type: TYPES.GET_CURRENT_USER_START, data};
}

export function login(data) {
  return {type: TYPES.LOGIN_START, data};
}

export function loginSuccess(data) {
  return {type: TYPES.LOGIN_SUCCESS, data};
}

export function loginFailure(data) {
  return {type: TYPES.LOGIN_FAILURE, data};
}

export function signUp(data) {
  return {type: TYPES.SIGN_UP_START, data};
}

export function signUpSuccess(data) {
  return {type: TYPES.SIGN_UP_SUCCESS, data};
}

export function signUpFailure(data) {
  return {type: TYPES.SIGN_UP_FAILURE, data};
}

export function forgotPassword(data) {
  return {type: TYPES.FORGOT_PASSWORD_START, data};
}

export function forgotPasswordSuccess(data) {
  return {type: TYPES.FORGOT_PASSWORD_SUCCESS, data};
}

export function forgotPasswordFailure(data) {
  return {type: TYPES.FORGOT_PASSWORD_FAILURE, data};
}

export function registerGoogleUser(data) {
  return {type: TYPES.GOOGLE_SIGIN_START, data};
}

export function registerGoogleUserSuccess(data) {
  return {type: TYPES.GOOGLE_SIGIN_SUCCESS, data};
}

export function registerGoogleUserFailure(data) {
  return {type: TYPES.GOOGLE_SIGIN_FAILURE, data};
}

export function registerFacebookUser(data) {
  return {type: TYPES.FACEBOOK_SIGIN_START, data};
}

export function registerFacebookUserSuccess(data) {
  return {type: TYPES.FACEBOOK_SIGIN_SUCCESS, data};
}

export function registerFacebookUserFailure(data) {
  return {type: TYPES.FACEBOOK_SIGIN_FAILURE, data};
}

export function registerAppleUser(data) {
  return {type: TYPES.APPLE_SIGIN_START, data};
}

export function registerAppleUserSuccess(data) {
  return {type: TYPES.APPLE_SIGIN_SUCCESS, data};
}

export function registerAppleUserFailure(data) {
  return {type: TYPES.APPLE_SIGIN_FAILURE, data};
}

export function verifyEmail(data) {
  return {type: TYPES.VERIFY_EMAIL, data};
}

export function verifyEmailSuccess(data) {
  return {type: TYPES.VERIFY_EMAIL_SUCCESS, data};
}

export function verifyEmailFailure(data) {
  return {type: TYPES.VERIFY_EMAIL_FAILURE, data};
}

export function sendOtp(data) {
  return {type: TYPES.SEND_EMAIL_VERIFICATION_OTP, data};
}

export function sendOtpSuccess(data) {
  return {type: TYPES.SEND_EMAIL_VERIFICATION_OTP_SUCCESS, data};
}

export function sendOtpFailure(data) {
  return {type: TYPES.SEND_EMAIL_VERIFICATION_OTP_FAILURE, data};
}

export function verifyForgotPasswordOtp(data) {
  return {type: TYPES.VERIFY_FORGOT_PASSWORD_OTP, data};
}

export function verifyForgotPasswordOtpSuccess(data) {
  return {type: TYPES.VERIFY_FORGOT_PASSWORD_OTP_SUCCESS, data};
}

export function verifyForgotPasswordOtpFailure(data) {
  return {type: TYPES.VERIFY_FORGOT_PASSWORD_OTP_FAILURE, data};
}

export function setNewPassword(data) {
  return {type: TYPES.SET_NEW_PASSWORD, data};
}

export function setNewPasswordSuccess(data) {
  return {type: TYPES.SET_NEW_PASSWORD_SUCCESS, data};
}

export function setNewPasswordFailure(data) {
  return {type: TYPES.SET_NEW_PASSWORD_FAILURE, data};
}

export function getUserProfile(data) {
  return {type: TYPES.GET_USER_PROFILE, data};
}

export function getUserProfileSuccess(data) {
  return {type: TYPES.GET_USER_PROFILE_SUCCESS, data};
}

export function getUserProfileFailure(data) {
  return {type: TYPES.GET_USER_PROFILE_FAILURE, data};
}

export function logoutUser(data) {
  return {type: TYPES.LOGOUT_USER, data};
}

export function logoutUserSuccess(data) {
  return {type: TYPES.LOGOUT_USER_SUCCESS, data};
}

export function logoutUserFailure(data) {
  return {type: TYPES.LOGOUT_USER_FAILURE, data};
}

export function resetReduxStore() {
  return {type: TYPES.RESET_STORE};
}

/**
 * Social Login Actions
 */
export const googleSignin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
    }
    return false;
  }
};

export const facebookSignin = async () => {
  return LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    result => {
      if (result.isCancelled) {
        return false;
      } else {
        return AccessToken.getCurrentAccessToken().then(data => {
          return data.accessToken.toString();
        });
      }
    },
    () => {
      Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
      return false;
    },
  );
};

export const appleSignin = async () => {
  try {
    if (appleAuth.isSupported) {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === appleAuth.State.AUTHORIZED) {
        return appleAuthRequestResponse.identityToken;
      } else {
        Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
      }
    } else {
      SimpleToast.show('Sign in with apple is not supported.');
    }
    return null;
  } catch (error) {
    console.log('appleSignin :: ', error);
    Alert.alert(strings.somethingWentWrong, strings.pleaseTryAgain);
    return null;
  }
};
