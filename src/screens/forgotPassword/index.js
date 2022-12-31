import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AuthHeader, AuthInput, AuthButton, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {forgotPassword} from '../../actions/userActions';
import {validateEmail} from '../../helper/helperFunctions';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const {authLoading} = useSelector(state => state.user);

  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const onSubmitPress = () => {
    if (!validateEmail(email)) {
      Alert.alert(strings.invalidEmail, strings.enterValidEmail);
    } else {
      dispatch(forgotPassword({email: email}));
    }
  };

  const onEmailChange = text => setEmail(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader title={strings.forgotPasswordTitle} onClosePress={goBack} />
        <Text style={style.descText}>{strings.forgotPasswordDesc}</Text>
        <AuthInput
          placeholder={strings.email}
          value={email}
          onChangeText={onEmailChange}
          autoCapitalize={'none'}
        />
        <AuthButton
          title={strings.resetMyPassword}
          onPress={onSubmitPress}
          containerStyle={style.button}
        />
      </KeyboardAwareScrollView>
      <Loader visible={authLoading} />
    </>
  );
};

export default ForgotPassword;
