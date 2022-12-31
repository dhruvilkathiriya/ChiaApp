import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './styles';

const UserProfile = ({userProfileImg, userName, profileName}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.userProfileImgView}>
        <Image
          resizeMode={'contain'}
          source={userProfileImg}
          style={style.userProfileImage}
        />
      </View>
      <View style={style.userNameViewStyle}>
        <Text style={style.userNameText}>{userName}</Text>
        <Text style={style.profileNameText}>{profileName}</Text>
      </View>
    </View>
  );
};

export default UserProfile;
