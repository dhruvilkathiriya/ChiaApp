import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  AuthHeader,
  AuthInput,
  AuthButton,
  CheckBox,
  Loader,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {validateEmail, validatePassword} from '../../helper/helperFunctions';
import {
  appleSignin,
  facebookSignin,
  googleSignin,
  registerAppleUser,
  registerFacebookUser,
  registerGoogleUser,
  signUp,
} from '../../actions/userActions';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewsLetterSub, setIsNewsLetterSub] = useState(false);

  const {authLoading} = useSelector(state => state.user);

  const {navigate, canGoBack, goBack} = useNavigation();

  const dispatch = useDispatch();

  const onSignUpPress = () => {
    if (name.length === 0) {
      Alert.alert(strings.nameEmpty, strings.enterYourName);
    } else if (email.length === 0) {
      Alert.alert(strings.emailEmpty, strings.enterYourEmail);
    } else if (!validateEmail(email)) {
      Alert.alert(strings.invalidEmail, strings.enterValidEmail);
    } else if (password.length === 0) {
      Alert.alert(strings.passwordEmpty, strings.enterYourPassword);
    } else if (validatePassword(password).length) {
      Alert.alert(validatePassword(password), strings.enterValidPassword);
    } else {
      const data = {
        firstName: name,
        email: email,
        password: password,
        receivePromotion: isNewsLetterSub,
      };
      dispatch(signUp(data));
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

  const onHeaderRightBtnPress = () => navigate('Login');

  const onCheckPress = () => setIsNewsLetterSub(!isNewsLetterSub);

  const onNameChange = text => setName(text);
  const onEmailChange = text => setEmail(text);
  const onPasswordChange = text => setPassword(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader
          title={strings.signup}
          onClosePress={canGoBack && goBack}
          rightButtonTitle={strings.loginTitle}
          onRightButtonPress={onHeaderRightBtnPress}
        />

        <AuthInput
          placeholder={strings.name}
          value={name}
          onChangeText={onNameChange}
        />
        <AuthInput
          placeholder={strings.email}
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

        <View style={style.newsLetterContainer}>
          <CheckBox value={isNewsLetterSub} onPress={onCheckPress} />
          <Text style={style.newsLetterText} onPress={onCheckPress}>
            {strings.receiveNewsletter}
          </Text>
        </View>

        <AuthButton title={strings.signup} onPress={onSignUpPress} />
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

export default Signup;
