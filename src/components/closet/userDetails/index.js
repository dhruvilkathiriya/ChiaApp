import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {UserTagListItem, UserFollowersSection} from '../../../components';
import {Rating} from '../../../components';
import {style} from './style';
import {colors} from '../../../helper/colors';

const UserDetails = ({
  mainContainer,
  userName,
  profileName,
  rateCounter,
  totalRatingCounter,
  onItemPress,
  sourceIcon,
  userTagsList,
  followersCount,
  transactionsCount,
  onLayout,
  profileImageUploading,
  onUserProfileImagePress,
  profileImgUrl,
}) => {
  const renderDesignersItem = ({item}) => <UserTagListItem item={item} />;
  //const [uri, setUri] = useState(profileImgUrl);

  return (
    <>
      <View style={[style.mainContainer, mainContainer]}>
        <View style={style.userDetailView} onLayout={onLayout}>
          <TouchableOpacity onPress={onUserProfileImagePress}>
            {profileImageUploading ? (
              <ActivityIndicator size={'small'} color={colors.primaryColor} />
            ) : (
              <Image
                resizeMode={'contain'}
                source={{uri: profileImgUrl}}
                style={style.userProfileImage}
              />
            )}
          </TouchableOpacity>
          <View style={style.userNameView}>
            <Text style={style.textUserStyle}>{userName}</Text>
            <Text>{profileName}</Text>
            <View style={style.starViewStyle}>
              <Rating defaultRating={rateCounter} isDisabled={true} />
              <Text style={style.ratedUserCounterStyle}>
                {totalRatingCounter}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onItemPress}>
          <Image
            source={sourceIcon}
            style={style.filterIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>

      {userTagsList.length ? (
        <FlatList
          data={userTagsList}
          numColumns={3}
          bounces={false}
          style={style.userTagStyle}
          ItemSeparatorComponent={() => {
            return <View style={style.itemSepratorStyle} />;
          }}
          ListHeaderComponent={() => {
            return <View style={style.itemSepratorStyle} />;
          }}
          renderItem={renderDesignersItem}
          keyExtractor={item => item.id}
        />
      ) : null}

      <UserFollowersSection
        followersCount={followersCount}
        transactionsCount={transactionsCount}
      />
    </>
  );
};
export default UserDetails;
