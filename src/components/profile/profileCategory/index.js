import React from 'react';
import {View, Text} from 'react-native';
import SwitchButton from '../../common/switchButton';
import {style} from './style';
const ProfileCategory = ({
  mainTitle,
  children,
  isShowSwitchButton,
  mainContainer,
  isSwitchVisible,
  titleStyle,
  onValueChange,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      <View style={style.subContainer}>
        <Text style={[style.mainTitle, titleStyle]}>{mainTitle}</Text>
        {!isSwitchVisible && (
          <SwitchButton
            value={isShowSwitchButton}
            onValueChange={onValueChange}
          />
        )}
      </View>
      {children}
    </View>
  );
};
export default ProfileCategory;
