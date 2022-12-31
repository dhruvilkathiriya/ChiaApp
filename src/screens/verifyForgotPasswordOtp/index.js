import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AuthHeader, AuthInput, AuthButton, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {verifyForgotPasswordOtp} from '../../actions/userActions';

const VerifyForgotPasswordOtp = props => {
  const email = props?.route?.params?.email;

  const {goBack} = useNavigation();

  const [otp, setOtp] = useState('');

  const {authLoading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const onVerifyForgotPasswordOtpPress = () => {
    if (otp.length === 0) {
      Alert.alert('enter otp');
    } else {
      const data = {email: email, otp: otp};
      dispatch(verifyForgotPasswordOtp(data));
    }
  };

  const onNewPasswordChange = text => setOtp(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader
          title={strings.verifyForgotPasswordOtp}
          onClosePress={goBack}
        />
        <Text style={[style.descText, {fontWeight: '500'}]}>
          {strings.verifyForgotPasswordOtpDesc}
        </Text>
        <AuthInput
          placeholder={strings.enterOtp}
          value={otp}
          onChangeText={onNewPasswordChange}
          autoCapitalize={'none'}
          mainContainer={style.inputContainerStyle}
        />
        <AuthButton
          title={strings.verifyOtp}
          onPress={onVerifyForgotPasswordOtpPress}
          containerStyle={style.button}
        />
      </KeyboardAwareScrollView>
      <Loader visible={authLoading} />
    </>
  );
};

export default VerifyForgotPasswordOtp;
