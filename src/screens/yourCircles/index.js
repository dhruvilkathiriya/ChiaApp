import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  CommonButton,
  Header,
  ProfileHeader,
  SectionHeader,
  SectionListItem,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';

const YourCircles = () => {
  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader
        title={strings.yourCircle}
        titleStyle={style.yourGroupTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      <KeyboardAwareScrollView bounces={false}>
        <CommonButton
          title={strings.createGroup}
          containerStyle={style.createGroupButtonStyle}
        />
        <SectionHeader
          outterContainerStyle={style.familyContainerStyle}
          headerLeftTitle={strings.family}
          headerRightTitle={strings.add}>
          <SectionListItem
            headerLeftTitle={'Hannah, Cathy, Jacky, &  5 More'}
            headerRightTitle={strings.edit}
          />
        </SectionHeader>
        <SectionHeader
          headerLeftTitle={strings.sorority}
          headerRightTitle={strings.add}>
          <SectionListItem
            headerLeftTitle={'Hannah, Cathy, Jacky, &  5 More'}
            headerRightTitle={strings.edit}
          />
        </SectionHeader>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default YourCircles;
