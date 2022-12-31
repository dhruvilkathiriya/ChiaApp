import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AuthHeader, AuthInput, AuthButton, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {
  appleSignin,
  facebookSignin,
  googleSignin,
  login,
  registerAppleUser,
  registerFacebookUser,
  registerGoogleUser,
} from '../../actions/userActions';
import {validateEmail} from '../../helper/helperFunctions';
import {getAsyncStorageData} from '../../helper/global';
import {deviceToken} from '../../helper/constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {authLoading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const {navigate, canGoBack, goBack} = useNavigation();

  const onForgotPress = () => navigate('ForgotPassword');

  const onLoginPress = async () => {
    if (email.length === 0) {
      Alert.alert(strings.emailEmpty, strings.enterYourEmail);
    } else if (!validateEmail(email)) {
      Alert.alert(strings.invalidEmail, strings.enterValidEmail);
    } else if (password.length === 0) {
      Alert.alert(strings.passwordEmpty, strings.enterYourPassword);
    } else {
      const fcmToken = await getAsyncStorageData(deviceToken);
      const data = {
        email: email,
        password: password,
        deviceToken: fcmToken || '',
      };
      dispatch(login(data));
    }
  };

  const onFacebookLoginPress = async () => {
    const data = await facebookSignin();
    if (data) {
      dispatch(registerFacebookUser({access_token: data || ''}));
    }
  };

  const onGoogleLoginPress = async () => {
    const data = await googleSignin();
    if (data) {
      dispatch(registerGoogleUser({access_token: data?.idToken || ''}));
    }
  };

  const onAppleLoginPress = async () => {
    const data = await appleSignin();
    if (data) {
      dispatch(registerAppleUser({access_token: data || ''}));
    }
  };

  const onClosePress = () => canGoBack() && goBack();

  const onHeaderRightBtnPress = () => navigate('Signup');

  const onEmailChange = text => setEmail(text);

  const onPasswordChange = text => setPassword(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader
          title={strings.loginTitle}
          rightButtonTitle={strings.signup}
          onRightButtonPress={onHeaderRightBtnPress}
          onClosePress={onClosePress}
        />
        <AuthInput
          placeholder={strings.emailOrPhoneNumber}
          value={email}
          onChangeText={onEmailChange}
          autoCapitalize={'none'}
        />
        <AuthInput
          placeholder={strings.password}
          secureTextEntry
          value={password}
          onChangeText={onPasswordChange}
        />
        <Text style={style.forgotPasswordText} onPress={onForgotPress}>
          {strings.forgotYourPassword}
        </Text>
        <AuthButton title={strings.login} onPress={onLoginPress} />
        <Text style={style.orText}>{strings.or}</Text>
        <AuthButton
          title={strings.signinWithFacebook}
          onPress={onFacebookLoginPress}
          containerStyle={style.socialButton}
        />
        <AuthButton
          title={strings.signinWithGoogle}
          onPress={onGoogleLoginPress}
          containerStyle={style.socialButton}
        />
        <AuthButton
          title={strings.signinWithApple}
          onPress={onAppleLoginPress}
          containerStyle={style.socialButton}
        />
      </KeyboardAwareScrollView>
      <Loader visible={authLoading} />
    </>
  );
};

export default Login;
