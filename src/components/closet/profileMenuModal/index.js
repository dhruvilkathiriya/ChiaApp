import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Modal from 'react-native-modal';

import {icons} from '../../../helper/iconsConstants';
import {style} from './style';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';

const ProfileMenuModal = ({
  visible,
  onBackPress,
  containerStyle,
  onFollowUnfollowClosetPress,
  onCopyLinkPress,
  onSharePress,
  onTurnNotificationPress,
  followUnFollowLoading,
  followStatus,
  notificationStatus,
  isTurnOnOffNotificationVisible,
  isFollowUnfollowVisible,
  turnOnOffNotificationLoading,
}) => {
  return (
    <Modal
      visible={visible}
      onBackButtonPress={onBackPress}
      onBackdropPress={onBackPress}
      style={style.mainContainer}>
      <View style={[style.containerStyle, containerStyle]}>
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={icons.backIcon}
            style={style.backIconStyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        {isFollowUnfollowVisible ? (
          followUnFollowLoading ? (
            <ActivityIndicator size={'small'} color={colors.primaryColor} />
          ) : (
            <TouchableOpacity
              style={style.touchStyle}
              onPress={onFollowUnfollowClosetPress}>
              <Text style={style.textStyle}>{followStatus}</Text>
            </TouchableOpacity>
          )
        ) : null}
        <TouchableOpacity style={style.touchStyle} onPress={onCopyLinkPress}>
          <Text style={style.textStyle}>{'COPY LINK'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.touchStyle} onPress={onSharePress}>
          <Text style={style.textStyle}>{'SHARE TO...'}</Text>
        </TouchableOpacity>
        {isTurnOnOffNotificationVisible ? (
          turnOnOffNotificationLoading ? (
            <ActivityIndicator size={'small'} color={colors.primaryColor} />
          ) : (
            <TouchableOpacity
              style={style.touchStyle}
              onPress={onTurnNotificationPress}>
              <Text style={style.textStyle}>
                {`TURN ${notificationStatus} POST NOTIFICATIONS`}
              </Text>
            </TouchableOpacity>
          )
        ) : null}
        <View style={{height: hp(5.5)}} />
      </View>
    </Modal>
  );
};
export default ProfileMenuModal;
