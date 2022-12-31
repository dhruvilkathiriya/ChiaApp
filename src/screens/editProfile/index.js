import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

import {
  Loader,
  ProfileHeader,
  CommonTextInput,
  CommonButton,
  ProfileCategory,
  ProfileSubCategory,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {validateEmail, validatePassword} from '../../helper/helperFunctions';
import {editProfile} from '../../actions/profileActions';
import {Header} from '../../components';

const EditProfile = () => {
  const {user} = useSelector(state => state.user);
  const {profileLoading} = useSelector(state => state.profile);

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [includeSecurityBadges, setIncludeSecurityBadges] = useState(
    user?.showBadge || false,
  );

  const dispatch = useDispatch();

  const onUpdatePress = () => {
    if (firstName.length === 0) {
      Alert.alert(strings.firstNameEmpty, strings.enterYourFirstName);
    } else if (lastName.length === 0) {
      Alert.alert(strings.lastNameEmpty, strings.enterYourLastName);
    } else if (email.length === 0) {
      Alert.alert(strings.emailEmpty, strings.enterYourEmail);
    } else if (!validateEmail(email)) {
      Alert.alert(strings.invalidEmail, strings.enterValidEmail);
    } else if (password.length === 0) {
      Alert.alert(strings.passwordEmpty, strings.enterYourPassword);
    } else if (validatePassword(password).length) {
      Alert.alert(validatePassword(password), strings.enterValidPassword);
    } else if (phoneNumber.length === 0) {
      Alert.alert(strings.phoneNumberEmpty, strings.enterYourPhoneNumber);
    } else if (bio.length === 0) {
      Alert.alert(strings.bioEmpty, strings.enterYourBio);
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        ...(user?.phoneNumber !== phoneNumber && {phoneNumber: phoneNumber}),
        bio: bio,
      };
      dispatch(editProfile(data));
    }
  };

  const onFirstNameChange = text => setFirstName(text);
  const onLastNameChange = text => setLastName(text);
  const onEmailChange = text => setEmail(text);
  const onPasswordChange = text => setPassword(text);
  const onPhoneNumberChange = text => setPhoneNumber(text);
  const onBioChange = text => setBio(text);

  const onSecurityBadgesToggle = () => {
    dispatch(
      editProfile({
        showBadge: !includeSecurityBadges,
        editMode: 'includeSecurityBadges',
      }),
    );
    setIncludeSecurityBadges(prevState => !prevState);
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView
        style={style.contentContainer}
        showsVerticalScrollIndicator={false}>
        <ProfileHeader title={strings.editProfile} />
        <CommonTextInput
          placeholder={strings.firstName}
          value={firstName}
          onChangeText={onFirstNameChange}
        />
        <CommonTextInput
          placeholder={strings.lastName}
          value={lastName}
          onChangeText={onLastNameChange}
        />
        <CommonTextInput
          placeholder={strings.emailAddress}
          value={email}
          onChangeText={onEmailChange}
          autoCapitalize={'none'}
        />
        <CommonTextInput
          placeholder={strings.password}
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry={true}
        />
        <CommonTextInput
          placeholder={strings.phoneNumber}
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
        />
        <CommonTextInput
          placeholder={strings.editBio}
          value={bio}
          onChangeText={onBioChange}
          multiLine={true}
        />
        <CommonButton
          title={strings.update}
          onPress={onUpdatePress}
          containerStyle={style.updateButton}
        />

        <ProfileCategory
          mainTitle={strings.includeSecurityBadges}
          isShowSwitchButton={includeSecurityBadges}
          onValueChange={onSecurityBadgesToggle}>
          <ProfileSubCategory category={strings.verifyPayment} />
          <ProfileSubCategory category={strings.verifyPhone} />
          <ProfileSubCategory category={strings.verifyEmail} />
          <ProfileSubCategory category={strings.verifyID} />
        </ProfileCategory>
      </KeyboardAwareScrollView>
      <Loader visible={profileLoading} />
    </View>
  );
};

export default EditProfile;
