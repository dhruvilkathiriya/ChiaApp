import React, {useEffect, useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  Loader,
  ProfileHeader,
  SectionHeader,
  SectionListItem,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Communications from 'react-native-communications';
import {useDispatch, useSelector} from 'react-redux';
import {getSiteSettings} from '../../actions/siteSettingsActions';
const PHONE_OPTION = ['Call', 'Text', 'Cancel'];

const NeedHelp = () => {
  const {siteSettings} = useSelector(state => state.siteSettingsReducer);

  const {siteSettingsLoading} = useSelector(state => state.siteSettingsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  const actionSheet = useRef();

  const onPhoneNumberPress = () => {
    actionSheet.current.show();
  };

  const onEmailPress = () => {
    Communications.email([`${siteSettings?.helpMail}`], null, null, null, null);
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false}>
        <ProfileHeader
          title={strings.needHelp}
          titleStyle={style.addAddressTitleStyle}
          mainContainer={style.profileHeaderContainer}
        />
        <SectionHeader
          outterContainerStyle={style.contactUsContainerStyle}
          headerLeftTitle={strings.contactUs}
          rightViewVisible={true}>
          <SectionListItem
            onItemPress={onEmailPress}
            headerLeftTitle={'Send Email'}
            headerRightTitle={`${siteSettings?.helpMail || ''}`}
          />
          <SectionListItem
            onItemPress={onPhoneNumberPress}
            headerLeftTitle={'Call or Text Us'}
            headerRightTitle={`${siteSettings?.helpPhone || ''}`}
          />
        </SectionHeader>
      </KeyboardAwareScrollView>
      <Loader visible={siteSettingsLoading} />
      <ActionSheet
        ref={actionSheet}
        options={PHONE_OPTION}
        destructiveButtonIndex={2}
        cancelButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 0:
              Communications.phonecall(siteSettings?.helpPhone || '', true);
              break;
            case 1:
              Communications.text(siteSettings?.helpPhone || '');
              break;
            default:
              break;
          }
        }}
      />
    </View>
  );
};

export default NeedHelp;
