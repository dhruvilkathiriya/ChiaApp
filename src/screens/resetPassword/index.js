import React, {useState} from 'react';
import {Text, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {AuthHeader, AuthInput, AuthButton, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {validatePassword} from '../../helper/helperFunctions';
import {setNewPassword} from '../../actions/userActions';

const ResetPassword = props => {
  const paramsData = props.route.params.data;

  const [newPassword, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const {authLoading} = useSelector(state => state.user);

  const {goBack} = useNavigation();

  const dispatch = useDispatch();

  const onSubmitPress = () => {
    if (newPassword.length === 0) {
      Alert.alert(strings.passwordEmpty, strings.enterYourPassword);
    } else if (validatePassword(newPassword).length) {
      Alert.alert(validatePassword(newPassword), strings.enterValidPassword);
    } else {
      if (newPassword === reEnterPassword) {
        const data = {
          email: paramsData?.email,
          otp: paramsData?.otp,
          password: newPassword,
        };
        dispatch(setNewPassword(data));
      } else {
        Alert.alert(strings.passwordMismatch, strings.enterSamePassword);
      }
    }
  };

  const onNewPasswordChange = text => setPassword(text);

  const onReEnterPassword = text => setReEnterPassword(text);

  return (
    <>
      <KeyboardAwareScrollView
        style={style.mainContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <AuthHeader title={strings.resetPasswordTitle} onClosePress={goBack} />
        <Text style={[style.descText, {fontWeight: '500'}]}>
          {strings.resetPasswordDesc}
        </Text>
        <Text style={style.descText}>
          {'  \u2022  ' + strings.resetPassDesc1}
        </Text>
        <Text style={style.descText}>
          {'  \u2022  ' + strings.resetPassDesc2}
        </Text>
        <Text style={style.descText}>
          {'  \u2022  ' + strings.resetPassDesc3}
        </Text>
        <AuthInput
          placeholder={strings.newPassword}
          value={newPassword}
          onChangeText={onNewPasswordChange}
          autoCapitalize={'none'}
          mainContainer={style.inputContainerStyle}
        />
        <AuthInput
          placeholder={strings.reEnterNewPassword}
          value={reEnterPassword}
          onChangeText={onReEnterPassword}
          autoCapitalize={'none'}
          mainContainer={style.reEnterInputStyle}
        />
        <AuthButton
          title={strings.submitNewPassword}
          onPress={onSubmitPress}
          containerStyle={style.button}
        />
      </KeyboardAwareScrollView>
      <Loader visible={authLoading} />
    </>
  );
};

export default ResetPassword;
