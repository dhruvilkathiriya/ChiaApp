import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AuthHeader, AuthInput, AuthButton, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {sendOtp, verifyEmail} from '../../actions/userActions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const VerifyEmail = props => {
  const email = props?.route?.params?.email;

  const [otp, setOtp] = useState('');

  const {goBack} = useNavigation();

  const {authLoading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const onVerifyEmailPress = () => {
    if (otp.length === 0) {
      Alert.alert(strings.enterOTP);
    } else {
      const data = {email: email, otp: otp};
      dispatch(verifyEmail(data));
    }
  };

  const onResendOtpPress = () => {
    const data = {email: email};
    dispatch(sendOtp(data));
  };

  const onNewPasswordChange = text => setOtp(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader title={strings.verifyYourEmail} onClosePress={goBack} />
        <Text style={[style.descText, {fontWeight: '500'}]}>
          {strings.verifyEmailDesc}
        </Text>
        <AuthInput
          placeholder={strings.enterOtp}
          value={otp}
          onChangeText={onNewPasswordChange}
          autoCapitalize={'none'}
          mainContainer={style.inputContainerStyle}
        />
        <TouchableOpacity>
          <Text style={style.resendOtpTextStyle} onPress={onResendOtpPress}>
            Resend OTP
          </Text>
        </TouchableOpacity>
        <AuthButton
          title={strings.verifyYourEmail}
          onPress={onVerifyEmailPress}
          containerStyle={style.button}
        />
      </KeyboardAwareScrollView>
      <Loader visible={authLoading} />
    </>
  );
};

export default VerifyEmail;
